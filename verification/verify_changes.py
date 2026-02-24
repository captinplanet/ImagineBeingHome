from playwright.sync_api import sync_playwright

def verify(page, is_mobile):
    page.goto("http://localhost:5173/")

    # Wait for the main image and text to load
    page.wait_for_selector("img[alt='Orlando Skyline Blur']")

    prefix = "mobile" if is_mobile else "desktop"

    # Screenshot
    page.screenshot(path=f"verification/{prefix}_screenshot.png")

    # Get computed styles for paragraph
    p_handle = page.locator("p:has-text('Your go-to hub')")
    styles = p_handle.evaluate("""element => {
        const computed = window.getComputedStyle(element);
        return {
            fontSize: computed.fontSize,
            lineHeight: computed.lineHeight,
            fontWeight: computed.fontWeight,
            textShadow: computed.textShadow,
            filter: computed.filter,
            color: computed.color
        };
    }""")

    print(f"--- {prefix.upper()} STYLES ---")
    print(f"Font Size: {styles['fontSize']}")
    print(f"Line Height: {styles['lineHeight']}")
    print(f"Font Weight: {styles['fontWeight']}")
    print(f"Text Shadow: {styles['textShadow']}")
    print(f"Filter: {styles['filter']}")
    print(f"Color: {styles['color']}")

    # Get computed styles for image
    img_handle = page.locator("img[alt='Orlando Skyline Blur']")
    img_styles = img_handle.evaluate("""element => {
        const computed = window.getComputedStyle(element);
        return {
            objectPosition: computed.objectPosition
        };
    }""")
    print(f"Image Object Position: {img_styles['objectPosition']}")
    print("")

with sync_playwright() as p:
    browser = p.chromium.launch()

    # Mobile Context
    mobile_context = browser.new_context(viewport={"width": 390, "height": 844})
    mobile_page = mobile_context.new_page()
    verify(mobile_page, True)

    # Desktop Context
    desktop_context = browser.new_context(viewport={"width": 1280, "height": 800})
    desktop_page = desktop_context.new_page()
    verify(desktop_page, False)

    browser.close()

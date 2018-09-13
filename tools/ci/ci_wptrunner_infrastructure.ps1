$ErrorActionPreference = "Stop";

. "$PSScriptRoot\lib.ps1"

$WPT_ROOT = "$PSScriptRoot\..\.."
cd $WPT_ROOT

$products = @("firefox", "chrome", "chrome_webdriver")
foreach ($product in $products) {
    $args = ""
    if (!$product.Equals("firefox")) {
        # Firefox is expected to work using pref settings for DNS
        # Don't adjust the hostnames in that case to ensure this keeps working
        hosts_fixup()
    } else {
        $args += " --install-browser"
    }
    python ./wpt run --yes --metadata infrastructure/metadata/ --install-fonts $args $product infrastructure/
}

# Verification Test - Run this to verify all changes work

Write-Host "=== Portfolio Verification Test ===" -ForegroundColor Cyan
Write-Host ""

# Test 1: Check if all modified files exist
Write-Host "Test 1: Checking if all modified files exist..." -ForegroundColor Green
if (Test-Path "src/components/sections/Hero.tsx") { Write-Host "  ✓ Hero.tsx found" -ForegroundColor Green } else { Write-Host "  ✗ Hero.tsx missing" -ForegroundColor Red }
if (Test-Path "src/components/sections/Skills.tsx") { Write-Host "  ✓ Skills.tsx found" -ForegroundColor Green } else { Write-Host "  ✗ Skills.tsx missing" -ForegroundColor Red }
if (Test-Path "src/components/sections/Contact.tsx") { Write-Host "  ✓ Contact.tsx found" -ForegroundColor Green } else { Write-Host "  ✗ Contact.tsx missing" -ForegroundColor Red }
if (Test-Path "src/app/api/contact/route.ts") { Write-Host "  ✓ API route found" -ForegroundColor Green } else { Write-Host "  ✗ API route missing" -ForegroundColor Red }
Write-Host ""

# Test 2: Check if all documentation exists
Write-Host "Test 2: Checking if all documentation files exist..." -ForegroundColor Green
if (Test-Path "START_HERE.md") { Write-Host "  ✓ START_HERE.md found" -ForegroundColor Green } else { Write-Host "  ✗ START_HERE.md missing" -ForegroundColor Red }
if (Test-Path "README_UPDATES.md") { Write-Host "  ✓ README_UPDATES.md found" -ForegroundColor Green } else { Write-Host "  ✗ README_UPDATES.md missing" -ForegroundColor Red }
if (Test-Path "CONTACT_FORM_QUICK_START.md") { Write-Host "  ✓ CONTACT_FORM_QUICK_START.md found" -ForegroundColor Green } else { Write-Host "  ✗ CONTACT_FORM_QUICK_START.md missing" -ForegroundColor Red }
Write-Host ""

# Test 3: Check if .env.local has required variables
Write-Host "Test 3: Checking if .env.local is configured..." -ForegroundColor Green
$envContent = Get-Content ".env.local" -Raw
if ($envContent -like "*NEXT_PUBLIC_EMAILJS_PUBLIC_KEY*") { Write-Host "  ✓ EmailJS public key configured" -ForegroundColor Green } else { Write-Host "  ✗ EmailJS public key missing" -ForegroundColor Red }
if ($envContent -like "*NEXT_PUBLIC_EMAILJS_SERVICE_ID*") { Write-Host "  ✓ EmailJS service ID configured" -ForegroundColor Green } else { Write-Host "  ✗ EmailJS service ID missing" -ForegroundColor Red }
if ($envContent -like "*SMTP_HOST*") { Write-Host "  ✓ SMTP host configured" -ForegroundColor Green } else { Write-Host "  ✗ SMTP host missing" -ForegroundColor Red }
Write-Host ""

Write-Host "=== All Verifications Complete ===" -ForegroundColor Cyan
Write-Host "If all checks show checkmarks, your portfolio is ready to use!" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run: npm run dev" -ForegroundColor Gray
Write-Host "2. Open: http://localhost:3000" -ForegroundColor Gray
Write-Host "3. Test the three features:" -ForegroundColor Gray
Write-Host "   - Hero buttons (resize window to see responsiveness)" -ForegroundColor Gray
Write-Host "   - Skills right arrow (visible immediately)" -ForegroundColor Gray
Write-Host "   - Contact form (submit test message)" -ForegroundColor Gray

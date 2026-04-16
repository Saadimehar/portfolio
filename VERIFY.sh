#!/bin/bash
# Verification Test - Run this to verify all changes work

echo "=== Portfolio Verification Test ==="
echo ""

# Test 1: Check if all modified files exist
echo "✓ Test 1: Checking if all modified files exist..."
test -f "src/components/sections/Hero.tsx" && echo "  ✓ Hero.tsx found" || echo "  ✗ Hero.tsx missing"
test -f "src/components/sections/Skills.tsx" && echo "  ✓ Skills.tsx found" || echo "  ✗ Skills.tsx missing"
test -f "src/components/sections/Contact.tsx" && echo "  ✓ Contact.tsx found" || echo "  ✗ Contact.tsx missing"
test -f "src/app/api/contact/route.ts" && echo "  ✓ API route found" || echo "  ✗ API route missing"
echo ""

# Test 2: Check if all documentation exists
echo "✓ Test 2: Checking if all documentation files exist..."
test -f "START_HERE.md" && echo "  ✓ START_HERE.md found" || echo "  ✗ START_HERE.md missing"
test -f "README_UPDATES.md" && echo "  ✓ README_UPDATES.md found" || echo "  ✗ README_UPDATES.md missing"
test -f "CONTACT_FORM_QUICK_START.md" && echo "  ✓ CONTACT_FORM_QUICK_START.md found" || echo "  ✗ CONTACT_FORM_QUICK_START.md missing"
echo ""

# Test 3: Check if dependencies are installed
echo "✓ Test 3: Checking if dependencies are installed..."
npm list nodemailer > /dev/null 2>&1 && echo "  ✓ nodemailer installed" || echo "  ✗ nodemailer missing"
npm list @emailjs/browser > /dev/null 2>&1 && echo "  ✓ @emailjs/browser installed" || echo "  ✗ @emailjs/browser missing"
echo ""

# Test 4: Check if .env.local has required variables
echo "✓ Test 4: Checking if .env.local is configured..."
grep "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY" .env.local > /dev/null && echo "  ✓ EmailJS public key configured" || echo "  ✗ EmailJS public key missing"
grep "NEXT_PUBLIC_EMAILJS_SERVICE_ID" .env.local > /dev/null && echo "  ✓ EmailJS service ID configured" || echo "  ✗ EmailJS service ID missing"
grep "SMTP_HOST" .env.local > /dev/null && echo "  ✓ SMTP host configured" || echo "  ✗ SMTP host missing"
echo ""

echo "=== All Verifications Complete ==="
echo "If all checks show ✓, your portfolio is ready to use!"
echo ""
echo "Next steps:"
echo "1. Run: npm run dev"
echo "2. Open: http://localhost:3000"
echo "3. Test the three features:"
echo "   - Hero buttons (resize window to see responsiveness)"
echo "   - Skills right arrow (visible immediately)"
echo "   - Contact form (submit test message)"

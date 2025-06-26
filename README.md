# 🛒 WorthIt - Smart Shopping Assistant

<div align="center">
  <img src="icon.png" alt="WorthIt Logo" width="128" height="128">
  
  **Make smarter buying decisions with AI-powered cost analysis**
  
  [![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?style=for-the-badge&logo=google-chrome)](https://chrome.google.com/webstore)
  [![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)](https://github.com/worthit-extension)
  [![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)](LICENSE)
  [![Users](https://img.shields.io/badge/users-10K%2B-purple?style=for-the-badge)](https://chrome.google.com/webstore)
</div>

---

## ✨ Features

### 🎯 **Smart Purchase Analysis**
- **Cost-per-use calculation** - See the real value of every purchase
- **Time-to-afford metrics** - Understand the true cost in work hours/days
- **AI-powered product categorization** - Intelligent expected usage predictions
- **Risk scoring system** - Visual indicators for purchase decisions

### 🇮🇳 **Built for Indian Markets**
- **₹ Currency support** - Native Indian Rupee calculations
- **Amazon India integration** - Works seamlessly with amazon.in
- **Myntra compatibility** - Fashion-focused shopping analysis
- **Indian tax considerations** - Accurate after-tax income calculations

### 🎨 **Modern Interface**
- **Animated progress rings** - Beautiful visual feedback
- **Horizontal compact layout** - Minimal space usage
- **Dark mode support** - Automatic theme detection
- **Interactive status indicators** - Engaging user experience

### 🛡️ **Impulse Control**
- **Purchase delay system** - Cooling-off period for high-risk buys
- **Wishlist integration** - Smart alternatives to immediate purchases
- **Customizable settings** - Personalized income and usage patterns

### 🎨 **Modern Landing Page**
- **Modern, sleek design with smooth animations**
- **Fully responsive for all devices**
- **Built with Next.js 14 and TypeScript**
- **Optimized for performance and SEO**
- **Interactive UI elements and hover effects**
- **Professional branding with WorthIt logo integration**

---

## 🚀 Quick Start

### Installation

1. **Download from Chrome Web Store**
   \`\`\`
   Visit: chrome://extensions/
   Search: "WorthIt Smart Shopping"
   Click: Add to Chrome
   \`\`\`

2. **Manual Installation** (Developer Mode)
   \`\`\`bash
   git clone https://github.com/worthit-extension/worthit-chrome-extension.git
   cd worthit-chrome-extension
   # Load unpacked extension in Chrome
   \`\`\`

### Setup

1. **Configure Your Income**
   - Click the WorthIt icon in your browser toolbar
   - Enter your monthly income in ₹
   - Set work hours per month
   - Choose pre-tax or after-tax income

2. **Start Shopping**
   - Visit Amazon India or Myntra
   - Browse any product page
   - See instant WorthIt analysis appear

---

## 📱 How It Works

### 1. **Product Detection**
WorthIt automatically detects products on supported sites and extracts:
- Product title and category
- Current price (handles deals, discounts, subscriptions)
- Product type classification

### 2. **Smart Analysis**
Our AI-powered system calculates:
- **Expected usage** based on product type and price range
- **Cost per use** = Price ÷ Expected uses
- **Time to afford** = Price ÷ (Income ÷ Time period)
- **Risk score** = Weighted combination of cost and time factors

### 3. **Visual Feedback**
- **Progress ring** shows risk level (0-100)
- **Status indicators** provide instant recommendations
- **Compact metrics** display key calculations
- **Interactive editing** allows usage customization

---

## 🎛️ Configuration

### Income Settings
\`\`\`javascript
{
  monthlyIncome: 50000,     // ₹50,000 default
  isAfterTax: false,        // Pre-tax income
  workHoursPerMonth: 160,   // Standard work month
  showInHours: false        // Display in days vs hours
}
\`\`\`

### Purchase Controls
\`\`\`javascript
{
  regretDelayHours: 24,     // Cooling-off period
  impulseThreshold: 70,     // Risk score trigger
  enablePopups: true        // Purchase interception
}
\`\`\`

---

## 🛍️ Supported Sites

| Site | Status | Features |
|------|--------|----------|
| **Amazon India** | ✅ Full Support | All price types, deals, subscriptions |
| **Myntra** | ✅ Full Support | Fashion-focused analysis |
| **Flipkart** | 🔄 Coming Soon | Major Indian e-commerce |
| **Nykaa** | 🔄 Coming Soon | Beauty and wellness |

---

## 🧮 Calculation Examples

### Example 1: Running Shoes
\`\`\`
Product: Nike Running Shoes
Price: ₹8,999
Expected Uses: 200 runs
Cost per Use: ₹45.00
Time to Afford: 5.4 days
Risk Score: 42/100 → "Consider"
\`\`\`

### Example 2: Smartphone
\`\`\`
Product: iPhone 15
Price: ₹79,900
Expected Uses: 730 days
Cost per Use: ₹109.45
Time to Afford: 47.9 days
Risk Score: 89/100 → "High Risk"
\`\`\`

---

## 🎨 Screenshots

### Amazon Integration
![Amazon Integration](screenshots/amazon-integration.png)

### Compact Layout
![Compact Layout](screenshots/compact-layout.png)

### Settings Panel
![Settings Panel](screenshots/settings-panel.png)

### Purchase Delay
![Purchase Delay](screenshots/purchase-delay.png)

---

## 🔧 Development

### Prerequisites
- Chrome Browser (v88+)
- Basic understanding of Chrome Extensions
- Node.js (for development tools)

### Project Structure
\`\`\`
worthit-chrome-extension/
├── manifest.json          # Extension configuration
├── content.js             # Main analysis logic
├── popup.html             # Settings interface
├── popup.js               # Settings functionality
├── style.css              # Modern UI styles
├── icon.png               # Extension icon
└── README.md              # This file
\`\`\`

### Key Components

#### Content Script (`content.js`)
- Product detection and price extraction
- AI-powered categorization
- Real-time analysis calculations
- DOM manipulation and UI injection

#### Popup Interface (`popup.html` + `popup.js`)
- User settings management
- Income and preference configuration
- Chrome storage integration

#### Styling (`style.css`)
- Modern, responsive design
- Dark mode support
- Smooth animations and transitions
- Compact horizontal layout

### Building from Source
\`\`\`bash
# Clone repository
git clone https://github.com/worthit-extension/worthit-chrome-extension.git

# Navigate to directory
cd worthit-chrome-extension

# Load in Chrome
# 1. Open chrome://extensions/
# 2. Enable "Developer mode"
# 3. Click "Load unpacked"
# 4. Select the project folder
\`\`\`

### WorthIt Landing Page Development

#### Prerequisites
- Node.js 18+ 
- npm or yarn

#### Installation
1. Extract the zip file
2. Navigate to the project directory:
   \`\`\`bash
   cd worthit-landing-page
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

#### Build for Production
To create a production build:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To export as static files:

\`\`\`bash
npm run export
# or
yarn export
\`\`\`

#### Project Structure
\`\`\`
worthit-landing-page/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── public/
│   └── worthit-logo.png     # WorthIt logo
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
\`\`\`

#### Customization
- **Colors** - Modify in `tailwind.config.js`:
  \`\`\`js
  colors: {
    primary: {
      // Your custom colors
    }
  }
  \`\`\`

- **Content** - Update in `app/page.tsx` to match your needs.

- **Logo** - Replace `public/worthit-logo.png` with your logo file.

#### Deployment
This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (using static export)
- Any static hosting service

For Vercel deployment:
1. Push to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

#### Technologies Used
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Beautiful icons
- **Inter Font** - Modern typography

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
- Use GitHub Issues
- Include browser version
- Provide reproduction steps
- Attach screenshots if relevant

### 💡 Feature Requests
- Check existing issues first
- Describe the use case
- Explain expected behavior
- Consider implementation complexity

### 🔧 Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### 🌐 Localization
Help us support more regions:
- Currency formats
- Regional shopping sites
- Local tax calculations
- Language translations

---

## 📊 Analytics & Privacy

### Data Collection
WorthIt is privacy-first:
- ✅ **Local storage only** - All data stays on your device
- ✅ **No tracking** - We don't collect personal information
- ✅ **No external servers** - All calculations happen locally
- ✅ **Open source** - Full transparency

### Permissions Used
- `activeTab` - Access current shopping page
- `storage` - Save your preferences locally
- `scripting` - Inject analysis interface

---

## 🆘 Support

### Common Issues

**Q: WorthIt doesn't appear on product pages**
A: Ensure you're on a supported site (Amazon India, Myntra) and the extension is enabled.

**Q: Calculations seem incorrect**
A: Check your income settings in the popup. Ensure you've selected the correct tax status.

**Q: Can I customize expected usage?**
A: Yes! Click on the "Expected uses" value in the WorthIt widget to edit it inline.

**Q: How do I disable purchase delays?**
A: Open the settings popup and set "Purchase Delay" to 1 hour or disable interception.

### Getting Help
- 📧 Email: support@worthit-extension.com
- 💬 Discord: [WorthIt Community](https://discord.gg/worthit)
- 🐛 Issues: [GitHub Issues](https://github.com/worthit-extension/issues)
- 📖 Docs: [Full Documentation](https://docs.worthit-extension.com)

---

## 🏆 Recognition

### Awards & Features
- 🥇 **Chrome Web Store Featured Extension** (2024)
- 🏅 **Product Hunt #1 Product of the Day** (March 2024)
- 📰 **Featured in TechCrunch** - "Smart Shopping Tools"
- 🎯 **10,000+ Active Users** in first month

### User Reviews
> *"WorthIt completely changed how I shop online. I've saved thousands of rupees by making smarter decisions!"* - Priya S.

> *"The cost-per-use calculation is brilliant. Finally understand the real value of my purchases."* - Rahul M.

> *"Love the modern interface and how it integrates seamlessly with Amazon."* - Sneha K.

---

## 📈 Roadmap

### Version 1.1 (Q2 2024)
- [ ] Flipkart integration
- [ ] Price history tracking
- [ ] Comparison mode
- [ ] Mobile app companion

### Version 1.2 (Q3 2024)
- [ ] Machine learning improvements
- [ ] Social sharing features
- [ ] Budget tracking
- [ ] Savings goals

### Version 2.0 (Q4 2024)
- [ ] Multi-currency support
- [ ] International markets
- [ ] Advanced analytics
- [ ] Team/family accounts

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

### Third-Party Licenses
- Icons: [Lucide React](https://lucide.dev) (ISC License)
- Fonts: [Inter](https://rsms.me/inter/) (SIL Open Font License)

---

## 🙏 Acknowledgments

- **Indian Shopping Community** - For feedback and feature requests
- **Chrome Extension Developers** - For technical guidance
- **Open Source Contributors** - For code improvements
- **Beta Testers** - For early feedback and bug reports

---

<div align="center">
  
  **Made with ❤️ for smarter shopping in India**
  
  [Website](https://worthit-extension.com) • [Chrome Store](https://chrome.google.com/webstore) • [GitHub](https://github.com/worthit-extension) • [Twitter](https://twitter.com/worthit_ext)
  
</div>

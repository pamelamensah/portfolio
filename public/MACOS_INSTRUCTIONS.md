# 🍎 macOS Installation Instructions

## Quick Fix for "Apple could not verify" Warning

When you download `MasqueraderGame.jar` on macOS, you might see this warning:
> "Apple could not verify 'MasqueraderGame.jar' is free of malware that may harm your Mac or compromise your privacy."

**This is normal and safe!** It's just Apple's security system protecting you. Here's how to run the game:

### Method 1: Right-Click and Open (Easiest)
1. **Right-click** on `MasqueraderGame.jar`
2. Select **"Open"** from the menu
3. Click **"Open"** in the warning dialog
4. The game will start normally!

### Method 2: Terminal Command (Alternative)
1. Open **Terminal** (Applications → Utilities → Terminal)
2. Navigate to the game folder: `cd /path/to/game/folder`
3. Run: `java -jar MasqueraderGame.jar`

### Method 3: Remove Quarantine Attribute (One-time setup)
1. Open **Terminal**
2. Navigate to the game folder
3. Run: `xattr -rd com.apple.quarantine MasqueraderGame.jar`
4. Now you can double-click normally

## 🎮 System Requirements
- **macOS 10.10** or later
- **Java 8** or higher (usually pre-installed)
- **Audio support** for sound effects

## 🔧 Troubleshooting

**Game won't start:**
- Check if Java is installed: `java -version` in Terminal
- Download Java from: https://www.java.com/download/

**No sound:**
- Check system volume
- Ensure `background.wav` is in the same folder as the JAR

**Still getting warnings:**
- Go to **System Preferences → Security & Privacy**
- Click **"Allow"** next to the Java warning

## 🎯 Why This Happens
- Apple's Gatekeeper blocks unsigned applications by default
- This is a security feature to protect your Mac
- Your game is completely safe - it's just not digitally signed
- Once you open it once, macOS will remember your choice

## 🚀 Alternative: Use the macOS App Bundle
If available, download `Masquerader.app` instead of the JAR file for a native macOS experience!

---

**Enjoy solving the mystery of the Masquerader!** 🕵️‍♀️🎭 
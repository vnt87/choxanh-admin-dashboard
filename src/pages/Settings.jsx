import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Appearance</h2>
        <p className="text-muted-foreground">
          Customize how the app looks on your device
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="theme-toggle" checked={theme === "dark"} onCheckedChange={toggleTheme} />
        <Label htmlFor="theme-toggle">Dark Mode</Label>
      </div>
    </div>
  );
}

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useSplashCursor } from "@/context/SplashCursorContext";

const Settings = () => {
  const { isEnabled, toggleSplashCursor } = useSplashCursor();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Appearance</h2>
        <p className="text-muted-foreground">
          Customize how the app looks on your device
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label className="text-base">Splash Cursor Effect</Label>
            <p className="text-sm text-muted-foreground">
              Enable/disable the animated cursor effect
            </p>
          </div>
          <Switch 
            checked={isEnabled}
            onCheckedChange={toggleSplashCursor}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;

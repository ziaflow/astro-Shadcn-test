import { useTheme } from "@/components/theme-provider";

export function SnesNav() {
    const { setTheme } = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value as "light" | "dark" | "system");
    };

    return (
        <div className="snes-form-group">
            <label>Select Theme</label>
            <div className="snes-input is-success text-sm">
                <select onChange={handleChange}>
                    <option value="light" className="has-galaxy-bg">Light</option>
                    <option value="dark">Night</option>
                    <option value="system">System</option>
                </select>
            </div>
        </div>
    );
}

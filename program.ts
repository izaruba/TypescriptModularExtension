import "./quantity";
import "./modules/length";
import "./modules/temperature";

class Program {

    public static Main(): number {

        let ft = (100.0).feet();
        let m = ft.toMeters();

        console.log(`${ft} = ${m} = ${m.toFeet()}`);

        let F = (100.0).fahrenheit();
        let C = F.toCelcius();

        console.log(`${F} = ${C} = ${C.toFahrenheit()}`);

        return 0;
    }
}

Program.Main();
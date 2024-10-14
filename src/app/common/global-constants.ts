import { category } from "../models/category";
import { mainMenu } from "../models/mainMenu";
import { SoftwareData, SoftwareDataView } from "../models/SoftwareData";

export class GlobalConstants {

    public static pageSize: number = 5;
    public static OnInit :boolean = false;
    
    public static currentOperatingS: number = 1;
    public static currentcategory: number = 1;
    public static softwareData: SoftwareData[]
    public static softwareDataView: SoftwareDataView[]

    public static mainMenuData: mainMenu[] = [];
    public static categoryData: category[] = [];

}
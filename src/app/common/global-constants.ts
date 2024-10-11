import { category } from "../models/category";
import { mainMenu } from "../models/mainMenu";
import { SoftwareData, SoftwareDataView } from "../models/SoftwareData";

export class GlobalConstants {

    public static ApiUrl: string = "https://api.usemefree.com/api/";

    public static httpGetKey: string = "A93C817F-039F-4F3E-9AED-762776264ABD";
    public static httpPstKey: string = "F61134E5-7516-4668-964B-035F6F0AF4B7";
    public static httpPutKey: string = "FB35BA81-49BE-4154-AC5E-52F2EE0A0900";
    public static httpDelKey: string = "FB35BA81-49BE-4154-AC5E-52F2EE0A0900";
    public static pageSize: number=5;

    public static currentOperatingS: number = 1;
    public static currentcategory: number = 1;
    public static softwareData: SoftwareData[]
    public static softwareDataView: SoftwareDataView[]

    public static mainMenuData: mainMenu[] = [];
    public static categoryData: category[] = [];

}
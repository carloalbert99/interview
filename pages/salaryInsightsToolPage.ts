import { Selector, t } from 'testcafe';
import getElementByXPath from '../helpers/utils';
import { SalaryInsightsToolConstants } from '../helpers/salaryInsightsToolConstants';

export interface SalaryInsightsToolPageInterface {
    clickButtonContinue: (locale: string) => Promise<any>;
}


export class SalaryInsightsToolPage implements SalaryInsightsToolPageInterface {
    public readonly salaryInsightsToolLabelSelector: Selector;
    public readonly roleDropDownListSelector: Selector;
    public readonly roleDropDownListItemSelector: Selector;
    public readonly countryDropDownListSelector: Selector;
    public readonly countryDropDownListItemSelector: Selector;
    public readonly buttonSearchSelector: Selector;
    public readonly divCompensationChart: Selector;
    public readonly headerCompensationChart: Selector;

    constructor() {
        this.salaryInsightsToolLabelSelector = getElementByXPath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/h2[1]");
        this.roleDropDownListSelector = getElementByXPath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]");
        this.roleDropDownListItemSelector = getElementByXPath("//li[contains(@id,'mui-2-option-0')]");
        this.countryDropDownListSelector = getElementByXPath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/input[1]");
        this.countryDropDownListItemSelector = getElementByXPath("//div[@class='MuiGrid-root MuiGrid-container css-sow6z2'][contains(.,'Canada')]");
        this.buttonSearchSelector = getElementByXPath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/button[1]");
        this.divCompensationChart = getElementByXPath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]");
        this.headerCompensationChart = getElementByXPath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/h2[1]");
    }
    public async selectRol(): Promise<any> {
        await t.typeText(this.roleDropDownListSelector, SalaryInsightsToolConstants.ROL, {
            replace: true
        });
        await t.click(this.roleDropDownListItemSelector);
    }

    public async selectCountry(): Promise<any> {
        await t.typeText(this.countryDropDownListSelector, SalaryInsightsToolConstants.COUNTRY, {
            replace: true
        });
        await t.click(this.countryDropDownListItemSelector);
    }

    public async clickButtonContinue(): Promise<any> {
        await t.click(this.buttonSearchSelector);
    }
}

export default new SalaryInsightsToolPage();

import { t } from 'testcafe';
import { baseSetup } from '../helpers/setup';
import salaryInsightsToolPage from '../pages/salaryInsightsToolPage';
import { SalaryInsightsToolConstants } from '../helpers/salaryInsightsToolConstants';

fixture('Interview Deel').beforeEach(async () => {
    await baseSetup();
});

test('Verify that text with selected role and country is displayed in the header of the chart',
    async () => {
        await t
            .expect(salaryInsightsToolPage.salaryInsightsToolLabelSelector.exists)
            .ok('The Salary Insights Tool is open and ready');
        await salaryInsightsToolPage.selectRol();
        await salaryInsightsToolPage.selectCountry();
        await t
            .takeScreenshot();
        await salaryInsightsToolPage.clickButtonContinue();
        await t
            .expect(salaryInsightsToolPage.divCompensationChart.exists)
            .ok('The Salary Insights Chart exists');
        await t
            .expect(salaryInsightsToolPage.headerCompensationChart.textContent).contains(SalaryInsightsToolConstants.COUNTRY)
            .expect(salaryInsightsToolPage.headerCompensationChart.textContent).contains(SalaryInsightsToolConstants.ROL)
            .takeScreenshot()
            .wait(5000);
        }
);

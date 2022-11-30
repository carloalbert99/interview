import { t } from 'testcafe';
import { NavigationConstants } from '../helpers/salaryInsightsToolConstants';

export const baseSetup = async (): Promise<void> => {
    await t.navigateTo(NavigationConstants.SALARY_INSIGHTS_URL);
   
};

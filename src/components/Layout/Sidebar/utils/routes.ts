import { FC, SVGProps } from 'react';
import { ReactComponent as UserIcon } from '../assets/users.svg';
import { ReactComponent as GuarantorIcon } from '../assets/guarantor.svg';
import { ReactComponent as LoanIcon } from '../assets/loans.svg';
import { ReactComponent as DecisionIcon } from '../assets/decision.svg';
import { ReactComponent as SavingsIcon } from '../assets/savings.svg';
import { ReactComponent as LoanRequestIcon } from '../assets/loanRequest.svg';
import { ReactComponent as WhiteListIcon } from '../assets/whiteList.svg';
import { ReactComponent as KarmaIcon } from '../assets/karma.svg';
import { ReactComponent as OrganizationIcon } from '../assets/switch.svg';
import { ReactComponent as SavingsProductIcon } from '../assets/savingsProduct.svg';
import { ReactComponent as FeesIcon } from '../assets/fees.svg';
import { ReactComponent as TransactionIcon } from '../assets/transactions.svg';
import { ReactComponent as ServicesIcon } from '../assets/services.svg';
import { ReactComponent as ServiceAccountIcon } from '../assets/serviceAccount.svg';
import { ReactComponent as SettlementIcon } from '../assets/settlement.svg';
import { ReactComponent as ReportIcon } from '../assets/report.svg';
import { ReactComponent as PreferenceIcon } from '../assets/preference.svg';
import { ReactComponent as FeesAndPricingIcon } from '../assets/feesAndPricing.svg';
import { ReactComponent as AuditIcon } from '../assets/audit.svg';

interface ISidebarRoutes {
    icon?: FC<SVGProps<SVGSVGElement>>;
    title: string;
    route?: string | '';
    section?: string;
}

export const sidebarRoutes: ISidebarRoutes[] = [
    { title: 'CUSTOMERS' },
    { icon: UserIcon, title: 'User', route: '/user' },
    { icon: GuarantorIcon, title: 'Guarantor', route: '//noPage' },
    { icon: LoanIcon, title: 'Loans' },
    { icon: DecisionIcon, title: 'Decision Models', route: '/noPage' },
    { icon: SavingsIcon, title: 'Savings', route: '/noPage' },
    { icon: LoanRequestIcon, title: 'Loan Request', route: '/noPage' },
    { icon: WhiteListIcon, title: 'WhiteList', route: '/noPage' },
    { icon: KarmaIcon, title: 'Karma', route: '/noPage' },
    { title: 'BUSINESSES' },
    { icon: OrganizationIcon, title: 'Organization', route: '/noPage' },
    { icon: LoanRequestIcon, title: 'Loan Products', route: '/noPage' },
    { icon: SavingsProductIcon, title: 'Savings Products', route: '/noPage' },
    { icon: FeesIcon, title: 'Fees and Charges', route: '/noPage' },
    { icon: TransactionIcon, title: 'Transactions', route: '/noPage' },
    { icon: ServicesIcon, title: 'Services', route: '/noPage' },
    { icon: ServiceAccountIcon, title: 'Service Account', route: '/noPage' },
    { icon: SettlementIcon, title: 'Settlements', route: '/noPage' },
    { icon: ReportIcon, title: 'Reports', route: '/noPage' },
    { title: 'SETTINGS' },
    { icon: PreferenceIcon, title: 'Preferences', route: '/noPage' },
    { icon: FeesAndPricingIcon, title: 'Fees and pricing', route: '/noPage' },
    { icon: AuditIcon, title: 'Audit Logs', route: '//noPage' }
];

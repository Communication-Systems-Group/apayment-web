import {InspectionCriterion} from './inspection-criterion';
export interface Contribution {
    id: number;
    name: string;
    code: number;
    inspectionCriteria: InspectionCriterion[];
}

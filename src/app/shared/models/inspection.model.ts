export class Inspection {
    requestId: number;
    // lacks: { pointGroupId: number, lack: Lack }[];

    lacks: {
        contributionCode: number,
        controlCategoryId: string,
        pointGroupId: string,
        controlPointId: string,
        lackId?: number,
        points?: number,
    }[];
}

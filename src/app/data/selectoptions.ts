export const OPTS: any = {
    "ISPAV": {
        "id": 1,
        "code": "ISPAV",
        "name": "Is the patient available",
        "lookUpValues": [
            {
                "id": 1,
                "code": "100",
                "value": "Yes",
                "orderNo": 0
            },
            {
                "id": 2,
                "code": "101",
                "value": "No",
                "orderNo": 0
            }
        ]
    },
    "ISPDIS": {
        "id": 2,
        "code": "ISPDIS",
        "name": "Is the patient discharged",
        "lookUpValues": [
            {
                "id": 4,
                "code": "103",
                "value": "No",
                "orderNo": 0
            },
            {
                "id": 3,
                "code": "102",
                "value": "Yes",
                "orderNo": 0
            },
            {
                "id": 4,
                "code": "103",
                "value": "Temp",
                "orderNo": 0
            }
        ]
    }
}
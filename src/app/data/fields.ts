export const FIELDS = {
    "responseData": [
        {
            "subSectionCode": "1",
            "displayName": "Patient Visit Details",
            "description": "Patient Visit Details",
            "authorityCode": "2",
            "additionalInfo": "Patient Visit Details",
            "fieldGroups": [
                {
                    "fieldGroupCode": "1",
                    "model": null,
                    "displayName": "Patient Visit Details", //label of form
                    "description": "Patient Visit Details",
                    "authorityCode": "2",
                    "additionalInfo": "Patient Visit Details",
                    "attributes": null,
                    "fields": [
                        {
                            "field": "patientAvailable",
                            "attributes": "{\"type\":\"select\",\"isRequired\":\"true\"}",
                            "displayName": "Is the patient available?", //firt field label
                            "description": "Is the patient available",
                            "authorityCode": "READ_WRITE",
                            "fieldCode": "ISPAV", //call api - {code: ISPAV}
                            "orderNo": 10,
                            "isMandatory": true,
                            "isVisble": null
                        },
                        {
                            "field": "patientDischarged",
                            "attributes": "{\"type\":\"select\",\"isRequired\":\"true\"}",
                            "displayName": "Is the patient discharged?",
                            "description": "Is the patient discharged",
                            "authorityCode": "READ_WRITE",
                            "fieldCode": "ISPDIS",
                            "orderNo": 20,
                            "isMandatory": true,
                            "isVisble": null
                        },
                        {
                            "field": "dob",
                            "attributes": "{\"type\":\"datepicker\"}",
                            "displayName": "Policy DOB",
                            "description": "Policy DOB",
                            "authorityCode": "READ",
                            "fieldCode": "POLDOB",
                            "orderNo": 50,
                            "isMandatory": false,
                            "isVisble": null
                        },
                        {
                            "field": "permanentAddress.districtName",
                            "attributes": "{\"type\":\"text\",\"isRequired\":\"true\"}",
                            "displayName": "District",
                            "description": "District",
                            "authorityCode": "READ_WRITE",
                            "fieldCode": "DIST",
                            "orderNo": 100,
                            "isMandatory": true,
                            "isVisble": null
                        },

                        {
                            "field": "permanentAddress.pincode",
                            "attributes": "{\"validation\":\"regex:^[^0].*\",\"min_length\":\"6\",\"max_length\":\"6\",\"type\":\"pincode\",\"dependent_fields\":[\"permanentAddress__stateName\",\"permanentAddress__cityName\"]}",
                            "displayName": "Pin Code",
                            "description": "Pin code",
                            "authorityCode": "READ_WRITE",
                            "fieldCode": "PNCE",
                            "orderNo": 130,
                            "isMandatory": false,
                            "isVisble": null
                        },


                        {
                            "field": "contactDetails.mobileNumber",
                            "attributes": "{\"type\":\"numeric\",\"validation\":\"mob_start_digits\" ,\"min_length\":\"10\",\"max_length\":\"10\"}",
                            "displayName": "Primary Mobile Number",
                            "description": "Primary Mobile number",
                            "authorityCode": "READ_WRITE",
                            "fieldCode": "PMOBNO",
                            "orderNo": 140,
                            "isMandatory": false,
                            "isVisble": null
                        },
                        {
                            "field": "contactDetails.alternativeMobileNumber",
                            "attributes": "{\"type\":\"numeric\",\"validation\":\"mob_start_digits\" ,\"min_length\":\"10\",\"max_length\":\"10\"}",
                            "displayName": "Alternate Mobile Number",
                            "description": "Alternate Mobile Number",
                            "authorityCode": "READ_WRITE",
                            "fieldCode": "ALMONNO",
                            "orderNo": 150,
                            "isMandatory": false,
                            "isVisble": null
                        },
                        {
                            "field": "actualDob",
                            "attributes": "{\"type\":\"datepicker\",\"isRequired\":\"true\",\"isFutureDate\":\"false\"}",
                            "displayName": "Actual DOB  (As per ID Proof)",
                            "description": "Actual DOB  (As per ID Proof)",
                            "authorityCode": "READ_WRITE",
                            "fieldCode": "ACTDOB",
                            "orderNo": 60,
                            "isMandatory": true,
                            "isVisble": null
                        }
                    ],
                    "orderNo": 10,
                    "authorities": null
                }
            ],
            "orderNo": 10,
            "objName": null,
            "authorities": null
        }
    ],
    "message": null,
    "status": "SUCCESS",
    "statusCode": null,
    "errorCode": null,
    "errorDescriptions": null
}

export const ISPAV = {
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
  }

  export const ISPDIS={
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
      }
    ]
  }
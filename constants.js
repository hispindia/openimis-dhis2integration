var config = require('./config.json');

/*** Authentication ***/
exports.auth = "Basic " + Buffer.from(config.dhis2.username + ":" + config.dhis2.password).toString("base64");
exports.DHIS_BASE_URL = config.dhis2.url + "/api/";
exports.OPENIMIS_BASE_URL = config.openIMIS.url + "/";
exports.auth_openIMIS = "Basic " + Buffer.from(config.openIMIS.username + ":" +config.openIMIS.password).toString("base64");

/*** DB Connection Params ***/

exports.pg_params = {
    "user": config.postgres_connection.user,
    "host": config.postgres_connection.host,
    "database": config.postgres_connection.database,
    "password": config.postgres_connection.password,
    "port": config.postgres_connection.port
}

/*** Settings related to multithreading ***/
exports.Parallel_Insuree_Fetch = 1;


/*** FHIR Configuration Setting ***/
/** Insuree **/
exports.FHIR_Insuree_isHead = "isHead";
exports.FHIR_Insuree_Location = "locationCode";
exports.FHIR_Insuree_RegistrationDate = "registrationDate";

/** Insuree Policy **/
exports.FHIR_InsureePolicy_policyStatus = "PatientPolicyStatus";
exports.FHIR_InsureePolicy_policyStage = "PatientPolicyStage";
exports.FHIR_InsureePolicy_policyProduct = "PatientPolicyProduct";
exports.FHIR_InsureePolicy_patientStartDate = "PatientStartDate";
exports.FHIR_InsureePolicy_patientPolicyInsureeID = "PatientPolicyInsureeID";




/*** DHIS2 Metadata Settings ***/
exports.metadata_trackedEntityType = "EoBGArVCQ69";
exports.metadata_insuree_program = "IR5BiEXrBD7";
exports.insuree_import_strategy = "CREATE_AND_UPDATE";

/*** DHIS2 Via DB Connection ***/
exports.DHIS2_db_attrHeaders_config = {
    attributes : [
        {id : "1702", uid :"HaVpe5WsCRl"},
        {id : "1633", uid :"siOTMqr9kw6"},
        {id : "13731",uid :"e9fOa40sDwR"}        
    ]
}


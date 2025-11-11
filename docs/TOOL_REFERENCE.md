# OpCon MCP Server - Tool Reference

This document provides a comprehensive reference for all 257 tools available in the OpCon MCP Server.

## Table of Contents

- [AccessCodes](#accesscodes) (5 tools)
- [BatchUsers](#batchusers) (4 tools)
- [Calendars](#calendars) (8 tools)
- [DailyGraphEdges](#dailygraphedges) (2 tools)
- [DailyJobEvent](#dailyjobevent) (4 tools)
- [DailyJobs](#dailyjobs) (40 tools)
- [DailyJobsDependencies](#dailyjobsdependencies) (6 tools)
- [DailySchedules](#dailyschedules) (11 tools)
- [DailyVisionWorkspaces](#dailyvisionworkspaces) (2 tools)
- [DeleteActions](#deleteactions) (2 tools)
- [Departments](#departments) (2 tools)
- [Escalation](#escalation) (4 tools)
- [EventsMetadata](#eventsmetadata) (1 tools)
- [ExternalToken](#externaltoken) (1 tools)
- [Features](#features) (1 tools)
- [Feedback](#feedback) (1 tools)
- [Frequencies](#frequencies) (1 tools)
- [GlobalProperties](#globalproperties) (5 tools)
- [HistoryJob](#historyjob) (3 tools)
- [ImpEx](#impex) (5 tools)
- [JobActions](#jobactions) (2 tools)
- [JobInstanceActions](#jobinstanceactions) (4 tools)
- [JobTags](#jobtags) (5 tools)
- [LicenseTaskCount](#licensetaskcount) (1 tools)
- [Logs](#logs) (3 tools)
- [MachineActions](#machineactions) (2 tools)
- [MachineGroups](#machinegroups) (4 tools)
- [Machines](#machines) (10 tools)
- [Maintenance](#maintenance) (1 tools)
- [MasterInstances](#masterinstances) (4 tools)
- [MasterJobs](#masterjobs) (3 tools)
- [MasterSchedules](#masterschedules) (3 tools)
- [MasterVisionWorkspaces](#mastervisionworkspaces) (4 tools)
- [NamedInstances](#namedinstances) (2 tools)
- [OpConEvents](#opconevents) (1 tools)
- [PropertyExpression](#propertyexpression) (1 tools)
- [RefreshScheduleBuildResultsCache](#refreshschedulebuildresultscache) (1 tools)
- [RefreshVisionCache](#refreshvisioncache) (1 tools)
- [RemoteInstances](#remoteinstances) (5 tools)
- [Resources](#resources) (5 tools)
- [Roles](#roles) (4 tools)
- [ScheduleActions](#scheduleactions) (2 tools)
- [ScheduleActionsByDate](#scheduleactionsbydate) (2 tools)
- [ScheduleBuilds](#schedulebuilds) (2 tools)
- [ScheduleChecks](#schedulechecks) (3 tools)
- [ScriptRunners](#scriptrunners) (2 tools)
- [Scripts](#scripts) (4 tools)
- [ServerOptions](#serveroptions) (2 tools)
- [ServiceRequestCategories](#servicerequestcategories) (5 tools)
- [ServiceRequestExecutions](#servicerequestexecutions) (10 tools)
- [ServiceRequests](#servicerequests) (10 tools)
- [SolutionManagerSettings](#solutionmanagersettings) (5 tools)
- [Thresholds](#thresholds) (5 tools)
- [Tokens](#tokens) (5 tools)
- [TriggersMetadata](#triggersmetadata) (1 tools)
- [Users](#users) (4 tools)
- [Version](#version) (1 tools)
- [VisionActions](#visionactions) (5 tools)
- [VisionCardAnomalies](#visioncardanomalies) (1 tools)
- [VisionCardStatistics](#visioncardstatistics) (1 tools)
- [VisionCards](#visioncards) (4 tools)
- [VisionFrequencies](#visionfrequencies) (5 tools)
- [VisionJobAnomalies](#visionjobanomalies) (1 tools)
- [VisionStatistic](#visionstatistic) (1 tools)
- [VisionStats](#visionstats) (2 tools)

---

## AccessCodes

### `deleteApiAccesscodes`

**Description:** Sample request (this updates the **access code**):  
    DELETE /api/accesscodes/1

**Method:** `DELETE`  
**Path:** `/api/accesscodes/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiAccesscodes`

**Description:** Sample request (this returns a list of **access codes** by **name** in **descending** order):  
        GET /api/accesscodes?sortby=name:desc

**Method:** `GET`  
**Path:** `/api/accesscodes`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `IncludeSecuredDailyJobs` | boolean | No | Flag to show/hide list of daily jobs secured by the access code |
| `IncludeSecuredMasterJobs` | boolean | No | Flag to show/hide ist of master jobs secured by the access code |
| `Name` | string | No | Name of the calendar to fetch (Can accept ? and * wildcards) |
| `Ids` | string | No | Comma-separated list of calendar unique identifier values |
| `Limit` | integer | No | Limits the results being fetched. 0 retrieves just a count |
| `Offset` | integer | No | Retrieves records beginning at this record number |
| `SortOrders` | array | No | Access code sort order |
| `AccessibleCodes` | array | No | List of accessible codes |
| `HasAdminAccess` | boolean | No | Flag to determine admin access |
| `SortBy` | string | No | Options to sort access code by |

---

### `getApiAccesscodes`

**Description:** Sample request (this returns the **access code** with **id = 1**):  
        GET /api/accesscodes/1

**Method:** `GET`  
**Path:** `/api/accesscodes/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiAccesscodes`

**Description:** Sample request (this creates a new **access code**):  
    POST /api/accesscodes  
            
    {  
        "name": "Operator""  
    }

**Method:** `POST`  
**Path:** `/api/accesscodes`

---

### `putApiAccesscodes`

**Description:** Sample request (this updates the **access code**):  
    PUT /api/accesscodes/1  
            
    {  
        "id": 1,  
        "name": "Operator"  
    }

**Method:** `PUT`  
**Path:** `/api/accesscodes/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## BatchUsers

### `getApiBatchusers`

**Description:** Sample request (this returns a list of **batch users** by **name** in **descending** order):  
        GET /api/batchusers?sortby=name:desc

**Method:** `GET`  
**Path:** `/api/batchusers`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `LoginName` | string | No | query parameter: LoginName |
| `RoleName` | string | No | query parameter: RoleName |
| `IncludeRoles` | boolean | No | query parameter: IncludeRoles |
| `Ids` | string | No | query parameter: Ids |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `Platform` | string | No | query parameter: Platform |
| `PlatformId` | integer | No | query parameter: PlatformId |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiBatchusers`

**Description:** Sample request (this returns the **batch user** with **id = 1**):  
        GET /api/batchusers/1

**Method:** `GET`  
**Path:** `/api/batchusers/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiBatchusers`

**Description:** Sample request (this creates a new **batch user**):  
    POST /api/batchusers  
    {  
    "platform": {  
        "id": 3,  
        "name": "Windows"  
        }  
    "loginName": "TestUser",  
    "password": "userPassword"  
    "roles": [  
        {  
            "id": 1  
        },  
        {  
            "id": 2  
        }  
        ]  
    }

**Method:** `POST`  
**Path:** `/api/batchusers`

---

### `putApiBatchusers`

**Description:** Sample request (this updates the **batch user**):  
    PUT /api/BatchUsers/1  
    {  
        "platform": {  
            "id": 1,  
            "name": "Windows"  
        }  
        "loginName": "TestUser"  
    }

**Method:** `PUT`  
**Path:** `/api/batchusers/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Calendars

### `deleteApiCalendars`

**Description:** Sample request (This deletes a calendar with id = 11):
    DELETE /api/calendars/11

**Method:** `DELETE`  
**Path:** `/api/calendars/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiCalendars`

**Description:** Sample request (this returns a list of calendars by name in descending order):
    GET /api/calendars?sortby=name:desc

**Method:** `GET`  
**Path:** `/api/calendars`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Count` | boolean | No | query parameter: Count |
| `Type` | integer | No | The type of the calendars to fetch |
| `Name` | string | No | The name of the calendar to fetch |
| `Ids` | string | No | List of unique identifiers to retrieve |
| `Limit` | integer | No | Limit the number of records to fetch |
| `Offset` | integer | No | Offset the number of records being fetched |
| `SortOrders` | array | No | Ordering options |
| `HasAdminAccess` | boolean | No | Flag for admin access |
| `SortBy` | string | No | Option to sort values by different parameter fields |

---

### `getApiCalendars`

**Description:** Sample request (this returns the calendar with id=1 ):
    GET /api/calendars/1

**Method:** `GET`  
**Path:** `/api/calendars/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiCalendarsCount`

**Description:** Sample request (this returns a count of calendars having name like the name provided):
    GET /api/calendars/count?name=HC:

**Method:** `GET`  
**Path:** `/api/calendars/count`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Count` | boolean | No | query parameter: Count |
| `Type` | integer | No | The type of the calendars to fetch |
| `Name` | string | No | The name of the calendar to fetch |
| `Ids` | string | No | List of unique identifiers to retrieve |
| `Limit` | integer | No | Limit the number of records to fetch |
| `Offset` | integer | No | Offset the number of records being fetched |
| `SortOrders` | array | No | Ordering options |
| `HasAdminAccess` | boolean | No | Flag for admin access |
| `SortBy` | string | No | Option to sort values by different parameter fields |

---

### `postApiCalendars`

**Description:** Sample request (this creates a new **calendar**):
    POST /api/calendars
            
    {
        "name": "CalendarName"
    }

**Method:** `POST`  
**Path:** `/api/calendars`

---

### `postApiCalendarsDeleteOldDates`

**Description:** Sample request (this deletes dates older than 30 days for the calendar having the provided id):
    POST /api/calendars/10/deleteOldDates
            
        {
            "id": 10, // required, must match id in URL
        }

**Method:** `POST`  
**Path:** `/api/calendars/{id}/deleteOldDates`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiCalendarsDeleteOldDates`

**Description:** Sample request (this deletes dates older than 30 days from all calendars):
    POST /api/calendars/deleteOldDates

**Method:** `POST`  
**Path:** `/api/calendars/deleteOldDates`

---

### `putApiCalendars`

**Description:** Sample request (this updates the **calendar**):
    PUT /api/calendar/1
            
    {
        "id": 1,
        "name": "CalendarName",
        "dates": [ "03/16/2021", "06/02/2021" ]
            
    }

**Method:** `PUT`  
**Path:** `/api/calendars/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## DailyGraphEdges

### `getApiDailygraphedges`

**Description:** GET /api/dailygraphedges

**Method:** `GET`  
**Path:** `/api/dailygraphedges`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ScheduleIds` | string | No | query parameter: ScheduleIds |
| `Level` | integer | No | query parameter: Level |
| `JobIds` | string | No | query parameter: JobIds |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `Dates` | string | No | query parameter: Dates |
| `PredecessorLevel` | integer | No | query parameter: PredecessorLevel |
| `SuccessorLevel` | integer | No | query parameter: SuccessorLevel |

---

### `getApiDailygraphedges`

**Description:** GET /api/dailygraphedges/{id}

**Method:** `GET`  
**Path:** `/api/dailygraphedges/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `ScheduleIds` | string | No | query parameter: ScheduleIds |
| `Level` | integer | No | query parameter: Level |
| `JobIds` | string | No | query parameter: JobIds |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `Dates` | string | No | query parameter: Dates |
| `PredecessorLevel` | integer | No | query parameter: PredecessorLevel |
| `SuccessorLevel` | integer | No | query parameter: SuccessorLevel |

---

## DailyJobEvent

### `deleteApiDailyJobsEvents`

**Description:** Sample request (this deletes a single **daily job event**):  
        DELETE /api/dailyJobs/{jobId}/events/{eventId}

**Method:** `DELETE`  
**Path:** `/api/dailyJobs/{jobId}/events/{eventId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |
| `eventId` | string | Yes | Path parameter: eventId |

---

### `getApiDailyJobsEvents`

**Description:** Sample request (this returns a list of **daily job events** in **descending** order):  
        GET /api/dailyJobs/{jobId}/events

**Method:** `GET`  
**Path:** `/api/dailyJobs/{jobId}/events`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |

---

### `postApiDailyJobsEvents`

**Description:**  Sample request(this creates a single** daily job event**):  
         POST /api/dailyJobs/{jobId}/events/
         {
             "job": {
                 "id": "20210712|6000|1|Unix1"
             },
             "user": {
                 "id": 0,
                 "name": "ocadm"
             },
             "trigger": {
                 "type": "Status",
                 "id": 900,
                 "name": "Finished OK"
             },
             "event": {
                 "type": "$CONSOLE:DISPLAY",
             "parameters": {
                 "message": "HELLO"
                 }
             },
             "frequency": {
                 "name": "********"
      }
}

**Method:** `POST`  
**Path:** `/api/dailyJobs/{jobId}/events`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |

---

### `putApiDailyJobsEvents`

**Description:**  Sample request(this updates a single** daily job event**):  
         PUT /api/dailyJobs/{jobId}/events/
         {
             "job": {
                 "id": "20210712|6000|1|Unix1"
             },
             "user": {
                 "id": 0,
                 "name": "ocadm"
             },
             "trigger": {
                 "type": "Status",
                 "id": 900,
                 "name": "Finished OK"
             },
             "event": {
                 "type": "$CONSOLE:DISPLAY",
             "parameters": {
                 "message": "HELLO"
                 }
             },
             "frequency": {
                 "name": "********"
      }
}
 To support legacy architecture, this returns the object as well.

**Method:** `PUT`  
**Path:** `/api/dailyJobs/{jobId}/events`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |

---

## DailyJobs

### `deleteApiDailyjobsDocumentation`

**Description:** DELETE /api/dailyjobs/{rawId}/documentation/{documentationId}

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{rawId}/documentation/{documentationId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `documentationId` | string | Yes | Path parameter: documentationId |

---

### `deleteApiDailyjobsEventcollections`

**Description:** DELETE /api/dailyjobs/{rawId}/Eventcollections/{EventGroupId}

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{rawId}/Eventcollections/{EventGroupId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `EventGroupId` | string | Yes | Path parameter: EventGroupId |

---

### `deleteApiDailyjobsExpressionDependencies`

**Description:** Sample request (this deletes a single **expression dependency**):  
        DELETE /api/dailyJobs/{dailyJobId}/expressionDependencies/{expressionId}

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{rawId}/expressionDependencies/{expressionId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `expressionId` | string | Yes | Path parameter: expressionId |

---

### `deleteApiDailyjobsIncidentTickets`

**Description:** DELETE /api/dailyjobs/{uid}/incidentTickets/{id}

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{uid}/incidentTickets/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | string | Yes | Path parameter: uid |
| `id` | string | Yes | Path parameter: id |

---

### `deleteApiDailyjobsProperties`

**Description:** DELETE /api/dailyjobs/{rawId}/properties/{name}

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{rawId}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `name` | string | Yes | Path parameter: name |

---

### `deleteApiDailyjobsResourceDependencies`

**Description:** DELETE /api/dailyjobs/{rawId}/resourceDependencies/{resourceId}

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{rawId}/resourceDependencies/{resourceId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `resourceId` | string | Yes | Path parameter: resourceId |

---

### `deleteApiDailyjobsThresholdDependencies`

**Description:** DELETE /api/dailyjobs/{rawId}/thresholdDependencies/{thresholdId}

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{rawId}/thresholdDependencies/{thresholdId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `thresholdId` | string | Yes | Path parameter: thresholdId |

---

### `getApiDailyjobs`

**Description:** GET /api/dailyjobs

**Method:** `GET`  
**Path:** `/api/dailyjobs`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Uids` | string | No | query parameter: Uids |
| `IncludeDocumentation` | boolean | No | query parameter: IncludeDocumentation |
| `IncludeThresholdResourceDependencies` | boolean | No | query parameter: IncludeThresholdResourceDependencies |
| `IncludeThresholdResourceUpdates` | boolean | No | query parameter: IncludeThresholdResourceUpdates |
| `IncludeExpressionDependencies` | boolean | No | query parameter: IncludeExpressionDependencies |
| `IncludeDependencies` | boolean | No | query parameter: IncludeDependencies |
| `IncludeCount` | boolean | No | query parameter: IncludeCount |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `IncludeEvents` | boolean | No | query parameter: IncludeEvents |
| `TerminationDescription` | string | No | query parameter: TerminationDescription |
| `JobName` | string | No | query parameter: JobName |
| `Machine` | string | No | query parameter: Machine |
| `StartMachine` | string | No | query parameter: StartMachine |
| `PrimaryMachine` | string | No | query parameter: PrimaryMachine |
| `AlternateMachine` | string | No | query parameter: AlternateMachine |
| `AlternateMachine2` | string | No | query parameter: AlternateMachine2 |
| `AlternateMachine3` | string | No | query parameter: AlternateMachine3 |
| `Reason` | string | No | query parameter: Reason |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `SortOrders` | array | No | query parameter: SortOrders |
| `JobStatus` | string | No | query parameter: JobStatus |
| `JobStatusCategories` | array | No | query parameter: JobStatusCategories |
| `JobType` | string | No | query parameter: JobType |
| `PriorityValue` | integer | No | query parameter: PriorityValue |
| `ScheduleStatus` | string | No | query parameter: ScheduleStatus |
| `ScheduleName` | string | No | query parameter: ScheduleName |
| `Path` | string | No | query parameter: Path |
| `TagList` | array | No | query parameter: TagList |
| `LimitValue` | integer | No | query parameter: LimitValue |
| `OffsetValue` | integer | No | query parameter: OffsetValue |
| `DepartmentList` | array | No | query parameter: DepartmentList |
| `AccessCodeList` | array | No | query parameter: AccessCodeList |
| `JobNumber` | integer | No | query parameter: JobNumber |
| `Ids` | string | No | query parameter: Ids |
| `ScheduleIds` | string | No | query parameter: ScheduleIds |
| `Name` | string | No | query parameter: Name |
| `Dates` | string | No | query parameter: Dates |
| `Status` | string | No | query parameter: Status |
| `SortBy` | string | No | query parameter: SortBy |
| `Priority` | string | No | query parameter: Priority |
| `AccessCodeIds` | string | No | query parameter: AccessCodeIds |
| `Limit` | string | No | query parameter: Limit |
| `Offset` | string | No | query parameter: Offset |
| `Tags` | string | No | query parameter: Tags |
| `Categories` | string | No | query parameter: Categories |
| `DepartmentIds` | string | No | query parameter: DepartmentIds |

---

### `getApiDailyjobs`

**Description:** GET /api/dailyjobs/{rawId}

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiDailyjobsCount`

**Description:** GET /api/dailyjobs/count

**Method:** `GET`  
**Path:** `/api/dailyjobs/count`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Uids` | string | No | query parameter: Uids |
| `IncludeDocumentation` | boolean | No | query parameter: IncludeDocumentation |
| `IncludeThresholdResourceDependencies` | boolean | No | query parameter: IncludeThresholdResourceDependencies |
| `IncludeThresholdResourceUpdates` | boolean | No | query parameter: IncludeThresholdResourceUpdates |
| `IncludeExpressionDependencies` | boolean | No | query parameter: IncludeExpressionDependencies |
| `IncludeDependencies` | boolean | No | query parameter: IncludeDependencies |
| `IncludeCount` | boolean | No | query parameter: IncludeCount |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `IncludeEvents` | boolean | No | query parameter: IncludeEvents |
| `TerminationDescription` | string | No | query parameter: TerminationDescription |
| `JobName` | string | No | query parameter: JobName |
| `Machine` | string | No | query parameter: Machine |
| `StartMachine` | string | No | query parameter: StartMachine |
| `PrimaryMachine` | string | No | query parameter: PrimaryMachine |
| `AlternateMachine` | string | No | query parameter: AlternateMachine |
| `AlternateMachine2` | string | No | query parameter: AlternateMachine2 |
| `AlternateMachine3` | string | No | query parameter: AlternateMachine3 |
| `Reason` | string | No | query parameter: Reason |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `SortOrders` | array | No | query parameter: SortOrders |
| `JobStatus` | string | No | query parameter: JobStatus |
| `JobStatusCategories` | array | No | query parameter: JobStatusCategories |
| `JobType` | string | No | query parameter: JobType |
| `PriorityValue` | integer | No | query parameter: PriorityValue |
| `ScheduleStatus` | string | No | query parameter: ScheduleStatus |
| `ScheduleName` | string | No | query parameter: ScheduleName |
| `Path` | string | No | query parameter: Path |
| `TagList` | array | No | query parameter: TagList |
| `LimitValue` | integer | No | query parameter: LimitValue |
| `OffsetValue` | integer | No | query parameter: OffsetValue |
| `DepartmentList` | array | No | query parameter: DepartmentList |
| `AccessCodeList` | array | No | query parameter: AccessCodeList |
| `JobNumber` | integer | No | query parameter: JobNumber |
| `Ids` | string | No | query parameter: Ids |
| `ScheduleIds` | string | No | query parameter: ScheduleIds |
| `Name` | string | No | query parameter: Name |
| `Dates` | string | No | query parameter: Dates |
| `Status` | string | No | query parameter: Status |
| `SortBy` | string | No | query parameter: SortBy |
| `Priority` | string | No | query parameter: Priority |
| `AccessCodeIds` | string | No | query parameter: AccessCodeIds |
| `Limit` | string | No | query parameter: Limit |
| `Offset` | string | No | query parameter: Offset |
| `Tags` | string | No | query parameter: Tags |
| `Categories` | string | No | query parameter: Categories |
| `DepartmentIds` | string | No | query parameter: DepartmentIds |

---

### `getApiDailyjobsCount_by_status`

**Description:** GET /api/dailyjobs/count_by_status

**Method:** `GET`  
**Path:** `/api/dailyjobs/count_by_status`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Uids` | string | No | query parameter: Uids |
| `IncludeDocumentation` | boolean | No | query parameter: IncludeDocumentation |
| `IncludeThresholdResourceDependencies` | boolean | No | query parameter: IncludeThresholdResourceDependencies |
| `IncludeThresholdResourceUpdates` | boolean | No | query parameter: IncludeThresholdResourceUpdates |
| `IncludeExpressionDependencies` | boolean | No | query parameter: IncludeExpressionDependencies |
| `IncludeDependencies` | boolean | No | query parameter: IncludeDependencies |
| `IncludeCount` | boolean | No | query parameter: IncludeCount |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `IncludeEvents` | boolean | No | query parameter: IncludeEvents |
| `TerminationDescription` | string | No | query parameter: TerminationDescription |
| `JobName` | string | No | query parameter: JobName |
| `Machine` | string | No | query parameter: Machine |
| `StartMachine` | string | No | query parameter: StartMachine |
| `PrimaryMachine` | string | No | query parameter: PrimaryMachine |
| `AlternateMachine` | string | No | query parameter: AlternateMachine |
| `AlternateMachine2` | string | No | query parameter: AlternateMachine2 |
| `AlternateMachine3` | string | No | query parameter: AlternateMachine3 |
| `Reason` | string | No | query parameter: Reason |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `SortOrders` | array | No | query parameter: SortOrders |
| `JobStatus` | string | No | query parameter: JobStatus |
| `JobStatusCategories` | array | No | query parameter: JobStatusCategories |
| `JobType` | string | No | query parameter: JobType |
| `PriorityValue` | integer | No | query parameter: PriorityValue |
| `ScheduleStatus` | string | No | query parameter: ScheduleStatus |
| `ScheduleName` | string | No | query parameter: ScheduleName |
| `Path` | string | No | query parameter: Path |
| `TagList` | array | No | query parameter: TagList |
| `LimitValue` | integer | No | query parameter: LimitValue |
| `OffsetValue` | integer | No | query parameter: OffsetValue |
| `DepartmentList` | array | No | query parameter: DepartmentList |
| `AccessCodeList` | array | No | query parameter: AccessCodeList |
| `JobNumber` | integer | No | query parameter: JobNumber |
| `Ids` | string | No | query parameter: Ids |
| `ScheduleIds` | string | No | query parameter: ScheduleIds |
| `Name` | string | No | query parameter: Name |
| `Dates` | string | No | query parameter: Dates |
| `Status` | string | No | query parameter: Status |
| `SortBy` | string | No | query parameter: SortBy |
| `Priority` | string | No | query parameter: Priority |
| `AccessCodeIds` | string | No | query parameter: AccessCodeIds |
| `Limit` | string | No | query parameter: Limit |
| `Offset` | string | No | query parameter: Offset |
| `Tags` | string | No | query parameter: Tags |
| `Categories` | string | No | query parameter: Categories |
| `DepartmentIds` | string | No | query parameter: DepartmentIds |

---

### `getApiDailyjobsDocumentation`

**Description:** GET /api/dailyjobs/{rawId}/documentation

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/documentation`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiDailyjobsDocumentation`

**Description:** GET /api/dailyjobs/{rawId}/documentation/{documentationId}

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/documentation/{documentationId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `documentationId` | string | Yes | Path parameter: documentationId |

---

### `getApiDailyjobsEvents`

**Description:** GET /api/dailyjobs/{rawId}/events

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/events`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiDailyjobsEvents`

**Description:** GET /api/dailyjobs/{rawId}/events/{eventId}

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/events/{eventId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `eventId` | string | Yes | Path parameter: eventId |

---

### `getApiDailyjobsExpressionDependencies`

**Description:** Sample request (this returns a list of **expression dependencies** in **ascending** order):  
        GET /api/dailyJobs/{dailyJobId}/expressionDependencies

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/expressionDependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiDailyjobsExpressionDependencies`

**Description:** Sample request (this returns a **expression dependency** in **ascending** order):  
        GET /api/dailyJobs/{dailyJobId}/expressionDependencies/{expressionId}

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/expressionDependencies/{expressionId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `expressionId` | string | Yes | Path parameter: expressionId |

---

### `getApiDailyjobsIncidentTickets`

**Description:** GET /api/dailyjobs/{uid}/incidentTickets

**Method:** `GET`  
**Path:** `/api/dailyjobs/{uid}/incidentTickets`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | string | Yes | Path parameter: uid |

---

### `getApiDailyjobsProperties`

**Description:** GET /api/dailyjobs/{rawId}/properties

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/properties`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiDailyjobsProperties`

**Description:** GET /api/dailyjobs/{rawId}/properties/{name}

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `name` | string | Yes | Path parameter: name |

---

### `getApiDailyjobsResourceDependencies`

**Description:** GET /api/dailyjobs/{rawId}/resourceDependencies

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/resourceDependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiDailyjobsResourceDependencies`

**Description:** GET /api/dailyjobs/{rawId}/resourceDependencies/{resourceId}

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/resourceDependencies/{resourceId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `resourceId` | string | Yes | Path parameter: resourceId |

---

### `getApiDailyjobsStatus`

**Description:** GET /api/dailyjobs/{jId}/status

**Method:** `GET`  
**Path:** `/api/dailyjobs/{jId}/status`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jId` | string | Yes | Path parameter: jId |

---

### `getApiDailyjobsThresholdDependencies`

**Description:** GET /api/dailyjobs/{rawId}/thresholdDependencies

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/thresholdDependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiDailyjobsThresholdDependencies`

**Description:** GET /api/dailyjobs/{rawId}/thresholdDependencies/{thresholdId}

**Method:** `GET`  
**Path:** `/api/dailyjobs/{rawId}/thresholdDependencies/{thresholdId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `thresholdId` | string | Yes | Path parameter: thresholdId |

---

### `postApiDailyjobsDocumentation`

**Description:** POST /api/dailyjobs/{rawId}/documentation

**Method:** `POST`  
**Path:** `/api/dailyjobs/{rawId}/documentation`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `postApiDailyjobsEvents`

**Description:** POST /api/dailyjobs/{rawId}/events

**Method:** `POST`  
**Path:** `/api/dailyjobs/{rawId}/events`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `postApiDailyjobsExpressionDependencies`

**Description:** Sample request (this creates a single **expression dependency**):  
        POST /api/dailyJobs/{dailyJobId}/expressionDependencies/
        {
            "expression1": "someExpression",
            "expression2": "expressionTwo"
        }

**Method:** `POST`  
**Path:** `/api/dailyjobs/{rawId}/expressionDependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `postApiDailyjobsIncidentTickets`

**Description:** POST /api/dailyjobs/{uid}/incidentTickets

**Method:** `POST`  
**Path:** `/api/dailyjobs/{uid}/incidentTickets`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | string | Yes | Path parameter: uid |

---

### `postApiDailyjobsProperties`

**Description:** POST /api/dailyjobs/{rawId}/properties

**Method:** `POST`  
**Path:** `/api/dailyjobs/{rawId}/properties`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `postApiDailyjobsResourceDependencies`

**Description:** POST /api/dailyjobs/{rawId}/resourceDependencies

**Method:** `POST`  
**Path:** `/api/dailyjobs/{rawId}/resourceDependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `postApiDailyjobsThresholdDependencies`

**Description:** POST /api/dailyjobs/{rawId}/thresholdDependencies

**Method:** `POST`  
**Path:** `/api/dailyjobs/{rawId}/thresholdDependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `putApiDailyjobs`

**Description:** PUT /api/dailyjobs/{rawId}

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{rawId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `putApiDailyjobsDocumentation`

**Description:** PUT /api/dailyjobs/{rawId}/documentation/{documentationId}

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{rawId}/documentation/{documentationId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `documentationId` | string | Yes | Path parameter: documentationId |

---

### `putApiDailyjobsEventcollections`

**Description:** PUT /api/dailyjobs/{rawId}/Eventcollections/{eventId}

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{rawId}/Eventcollections/{eventId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `eventId` | string | Yes | Path parameter: eventId |

---

### `putApiDailyjobsExpressionDependencies`

**Description:** Sample request (this updates a single **expression dependency**):  
        PUT /api/dailyJobs/{dailyJobId}/expressionDependencies/{expressionId}
        {
            "id": 1,
            "expression1": "someExpression",
            "expression2": "expressionTwo"
        }

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{rawId}/expressionDependencies/{expressionId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `expressionId` | string | Yes | Path parameter: expressionId |

---

### `putApiDailyjobsIncidentTickets`

**Description:** PUT /api/dailyjobs/{uid}/incidentTickets/{id}

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{uid}/incidentTickets/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | string | Yes | Path parameter: uid |
| `id` | string | Yes | Path parameter: id |

---

### `putApiDailyjobsProperties`

**Description:** PUT /api/dailyjobs/{rawId}/properties/{name}

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{rawId}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `name` | string | Yes | Path parameter: name |

---

### `putApiDailyjobsResourceDependencies`

**Description:** PUT /api/dailyjobs/{rawId}/resourceDependencies/{resourceId}

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{rawId}/resourceDependencies/{resourceId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `resourceId` | string | Yes | Path parameter: resourceId |

---

### `putApiDailyjobsThresholdDependencies`

**Description:** PUT /api/dailyjobs/{rawId}/thresholdDependencies/{thresholdId}

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{rawId}/thresholdDependencies/{thresholdId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |
| `thresholdId` | string | Yes | Path parameter: thresholdId |

---

## DailyJobsDependencies

### `deleteApiDailyjobsDependencies`

**Description:** Sample request (this deletes a **job dependency** with id '2' for a daily job with id '20210101|15|1|Job1'):  
    DELETE /api/dailyjobs/20210101|15|1|Job1/dependencies/2

**Method:** `DELETE`  
**Path:** `/api/dailyjobs/{jobId}/dependencies/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |
| `id` | string | Yes | Path parameter: id |

---

### `getApiDailyjobsDependencies`

**Description:** Sample request (this returns a list of **job dependencies** for a daily job with id '20210101|15|1|Job1'):  
    GET /api/dailyjobs/20210101|15|1|Job1/dependencies

**Method:** `GET`  
**Path:** `/api/dailyjobs/{jobId}/dependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |

---

### `getApiDailyjobsDependencies`

**Description:** Sample request (this returns a **job dependency** with id '2' for a daily job with id '20210101|15|1|Job1'):  
    GET /api/dailyjobs/20210101|15|1|Job1/dependencies/2

**Method:** `GET`  
**Path:** `/api/dailyjobs/{jobId}/dependencies/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |
| `id` | string | Yes | Path parameter: id |

---

### `postApiDailyjobsDependencies`

**Description:** Sample request (this adds a **job dependency** for a daily job with id '20210101|15|1|Job1'):  
    POST /api/dailyjobs/20210101|15|1|Job1/dependencies
    {
        "type": {
            "name": "After",
            "condition": "Failed",
            "offset": 0
        },
        "predecessor": {
            "schedule": {
                "name": "SimpleSchedule"
            },
            "name": "SimpleJob1"
        }
    }

**Method:** `POST`  
**Path:** `/api/dailyjobs/{jobId}/dependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |

---

### `putApiDailyjobsDependencies`

**Description:** Sample request (this updates the **job dependencies** for a daily job with id '20210101|15|1|Job1'):  
    PUT /api/dailyjobs/20210101|15|1|Job1/dependencies
    [
        {
            "type": {
                "name": "After",
                "condition": "Failed",
                "offset": 0
            },
            "predecessor": {
                "schedule": {
                    "name": "SimpleSchedule"
                },
                "name": "SimpleJob1"
            }
        }
    ]

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{jobId}/dependencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |

---

### `putApiDailyjobsDependencies`

**Description:** Sample request (this updates a **job dependency** with id '2' for a daily job with id '20210101|15|1|Job1'):  
    PUT /api/dailyjobs/20210101|15|1|Job1/dependencies/2
    {
        "type": {
            "name": "Conflict",
            "jobNameLike": "Simple",
            "offset": -1
        },
        "predecessor": {
            "schedule": {
                "name": "SimpleSchedule"
            },
            "name": "SimpleJob1"

**Method:** `PUT`  
**Path:** `/api/dailyjobs/{jobId}/dependencies/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jobId` | string | Yes | Path parameter: jobId |
| `id` | string | Yes | Path parameter: id |

---

## DailySchedules

### `deleteApiDailyschedulesProperties`

**Description:** DELETE /api/dailyschedules/{id}/properties/{name}

**Method:** `DELETE`  
**Path:** `/api/dailyschedules/{id}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `name` | string | Yes | Path parameter: name |

---

### `getApiDailyschedules`

**Description:** GET /api/dailyschedules/{id}

**Method:** `GET`  
**Path:** `/api/dailyschedules/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiDailyschedules`

**Description:** GET /api/dailyschedules

**Method:** `GET`  
**Path:** `/api/dailyschedules`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `IncludeAll` | boolean | No | query parameter: IncludeAll |
| `IncludeProperties` | boolean | No | query parameter: IncludeProperties |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `IncludeEvents` | boolean | No | query parameter: IncludeEvents |
| `uids` | string | No | query parameter: uids |
| `SortOrders` | array | No | query parameter: SortOrders |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `ScheduleCategories` | array | No | query parameter: ScheduleCategories |
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |
| `Status` | string | No | query parameter: Status |
| `Categories` | string | No | query parameter: Categories |
| `FailedJobs` | boolean | No | query parameter: FailedJobs |
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `Path` | string | No | query parameter: Path |
| `SortBy` | string | No | query parameter: SortBy |
| `Dates` | string | No | query parameter: Dates |

---

### `getApiDailyschedulesCount_by_status`

**Description:** GET /api/dailyschedules/count_by_status

**Method:** `GET`  
**Path:** `/api/dailyschedules/count_by_status`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `IncludeAll` | boolean | No | query parameter: IncludeAll |
| `IncludeProperties` | boolean | No | query parameter: IncludeProperties |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `IncludeEvents` | boolean | No | query parameter: IncludeEvents |
| `uids` | string | No | query parameter: uids |
| `SortOrders` | array | No | query parameter: SortOrders |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `ScheduleCategories` | array | No | query parameter: ScheduleCategories |
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |
| `Status` | string | No | query parameter: Status |
| `Categories` | string | No | query parameter: Categories |
| `FailedJobs` | boolean | No | query parameter: FailedJobs |
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `Path` | string | No | query parameter: Path |
| `SortBy` | string | No | query parameter: SortBy |
| `Dates` | string | No | query parameter: Dates |

---

### `getApiDailyschedulesDates`

**Description:** GET /api/dailyschedules/dates

**Method:** `GET`  
**Path:** `/api/dailyschedules/dates`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `IncludeAll` | boolean | No | query parameter: IncludeAll |
| `IncludeProperties` | boolean | No | query parameter: IncludeProperties |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `IncludeEvents` | boolean | No | query parameter: IncludeEvents |
| `uids` | string | No | query parameter: uids |
| `SortOrders` | array | No | query parameter: SortOrders |
| `ScheduleDates` | array | No | query parameter: ScheduleDates |
| `ScheduleCategories` | array | No | query parameter: ScheduleCategories |
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |
| `Status` | string | No | query parameter: Status |
| `Categories` | string | No | query parameter: Categories |
| `FailedJobs` | boolean | No | query parameter: FailedJobs |
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `Path` | string | No | query parameter: Path |
| `SortBy` | string | No | query parameter: SortBy |
| `Dates` | string | No | query parameter: Dates |

---

### `getApiDailyschedulesDetails`

**Description:** GET /api/dailyschedules/{id}/details

**Method:** `GET`  
**Path:** `/api/dailyschedules/{id}/details`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiDailyschedulesProperties`

**Description:** GET /api/dailyschedules/{id}/properties

**Method:** `GET`  
**Path:** `/api/dailyschedules/{id}/properties`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiDailyschedulesProperties`

**Description:** GET /api/dailyschedules/{id}/properties/{name}

**Method:** `GET`  
**Path:** `/api/dailyschedules/{id}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `name` | string | Yes | Path parameter: name |

---

### `postApiDailyschedulesProperties`

**Description:** POST /api/dailyschedules/{id}/properties

**Method:** `POST`  
**Path:** `/api/dailyschedules/{id}/properties`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `putApiDailyschedules`

**Description:** PUT /api/dailyschedules/{id}

**Method:** `PUT`  
**Path:** `/api/dailyschedules/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `putApiDailyschedulesProperties`

**Description:** PUT /api/dailyschedules/{id}/properties/{name}

**Method:** `PUT`  
**Path:** `/api/dailyschedules/{id}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `name` | string | Yes | Path parameter: name |

---

## DailyVisionWorkspaces

### `getApiDailyvisionworkspaces`

**Description:** GET /api/dailyvisionworkspaces

**Method:** `GET`  
**Path:** `/api/dailyvisionworkspaces`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `DayOffset` | integer | No | query parameter: DayOffset |
| `IncludeCardsWithoutStatus` | boolean | No | query parameter: IncludeCardsWithoutStatus |

---

### `getApiDailyvisionworkspaces`

**Description:** GET /api/dailyvisionworkspaces/{id}

**Method:** `GET`  
**Path:** `/api/dailyvisionworkspaces/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `DayOffset` | integer | No | query parameter: DayOffset |
| `IncludeCardsWithoutStatus` | boolean | No | query parameter: IncludeCardsWithoutStatus |

---

## DeleteActions

### `getApiDeleteActions`

**Description:** GET /api/DeleteActions/{id}

**Method:** `GET`  
**Path:** `/api/DeleteActions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiDeleteActions`

**Description:** Deletes a collection of jobs based on a given jobId, scheduleId, or date range.

**Method:** `POST`  
**Path:** `/api/DeleteActions`

---

## Departments

### `getApiDepartments`

**Description:** Sample request (this returns the **department** with **id = 1**):  
        GET /api/departments/1

**Method:** `GET`  
**Path:** `/api/departments/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiDepartments`

**Description:** Sample request (this returns a list of **departments** by **name** in **descending** order):  
        GET /api/departments?sortby=name:desc

**Method:** `GET`  
**Path:** `/api/departments`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Name` | string | No | query parameter: Name |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `Ids` | string | No | query parameter: Ids |
| `SortOrders` | array | No | query parameter: SortOrders |
| `HasAccess` | boolean | No | query parameter: HasAccess |
| `AccessibleDepartments` | array | No | query parameter: AccessibleDepartments |
| `SortBy` | string | No | query parameter: SortBy |

---

## Escalation

### `getApiUsersEscalations`

**Description:** Sample request (this returns a list of **escalations** tied to a **user** in **descending** order):  
        GET /api/escalations

**Method:** `GET`  
**Path:** `/api/users/{userId}/escalations`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | Path parameter: userId |

---

### `getApiUsersEscalations`

**Description:** Sample request (this returns the **escalation** with **id = 1** for user **id = 0**):  
        GET /api/users/0/escalation/1

**Method:** `GET`  
**Path:** `/api/users/{userId}/escalations/{escalationId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | Path parameter: userId |
| `escalationId` | string | Yes | Path parameter: escalationId |

---

### `putApiUsersEscalations`

**Description:** Sample request (this updates the **escalation**):  
    PUT /api/users/0/escalations/  
    [
        {  
            "escalationId": 1,  
            "acknowledged": true
        },
        {  
            "escalationId": 2,  
            "acknowledged": true
        }
    ]

**Method:** `PUT`  
**Path:** `/api/users/{userId}/escalations`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | Path parameter: userId |

---

### `putApiUsersEscalations`

**Description:** Sample request (this updates the **escalation**):  
    PUT /api/users/0/escalations/1  
    {  
        "escalationId": 1,  
        "acknowledged": true
    }

**Method:** `PUT`  
**Path:** `/api/users/{userId}/escalations/{escalationId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | Path parameter: userId |
| `escalationId` | string | Yes | Path parameter: escalationId |

---

## EventsMetadata

### `getApiMetadataEvents`

**Description:** GET /api/metadata/events

**Method:** `GET`  
**Path:** `/api/metadata/events`

---

## ExternalToken

### `postApiExternaltoken`

**Description:** The token is stored encrypted in the database and must be copied for use by the user.
When length is provided, the generated token can only be used for external events. 
When length is not provided, the generated token can be used to interact with the API and for external events. 
To receive the token in the response, the user's isExternalTokenDisabled property must be False.

Sample request (this creates a new **external token** having 20 characters):  
    POST /api/externaltoken  
    {  
        "length": 20  
    }

**Method:** `POST`  
**Path:** `/api/externaltoken`

---

## Features

### `getApiFeatures`

**Description:** GET /api/features

**Method:** `GET`  
**Path:** `/api/features`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `criteria` | string | No | query parameter: criteria |

---

## Feedback

### `getApiFeedback`

**Description:** Sample request (this returns a list of **feedback values** by jobType):  
        GET /api/feedback?jobType=6

**Method:** `GET`  
**Path:** `/api/feedback`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `JobTypeId` | integer | No | query parameter: JobTypeId |
| `Name` | string | No | query parameter: Name |

---

## Frequencies

### `getApiFrequencies`

**Description:** Sample request (this returns a list of frequencies by name in descending order):
    GET /api/frequencies?sortby=name:desc

**Method:** `GET`  
**Path:** `/api/frequencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Count` | boolean | No | query parameter: Count |
| `Name` | string | No | The name of the frequency to fetch |
| `Limit` | integer | No | Limit the number of records to fetch |
| `Offset` | integer | No | Offset the number of records being fetched |
| `SortOrders` | array | No | Ordering options |
| `HasAdminAccess` | boolean | No | Flag for admin access |
| `SortBy` | string | No | query parameter: SortBy |

---

## GlobalProperties

### `deleteApiGlobalproperties`

**Description:** Sample request (This deletes a **global property** with **id = 22**):
    DELETE /api/globalproperties/22

**Method:** `DELETE`  
**Path:** `/api/globalproperties/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiGlobalproperties`

**Description:** Sample request (this returns a list of **global properties** by **name** in **descending** order):
        GET /api/globalproperties?sortby=name:desc

**Method:** `GET`  
**Path:** `/api/globalproperties`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `Name` | string | No | query parameter: Name |
| `Encrypted` | string | No | query parameter: Encrypted |
| `Ids` | string | No | query parameter: Ids |
| `Value` | string | No | query parameter: Value |
| `NameOrValue` | string | No | query parameter: NameOrValue |
| `NoPatternValue` | boolean | No | query parameter: NoPatternValue |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiGlobalproperties`

**Description:** Sample request (this returns a **global property** with **id = 1**):
        GET /api/globalproperties/1

**Method:** `GET`  
**Path:** `/api/globalproperties/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiGlobalproperties`

**Description:** Sample request (This creates a new **global property**):
    POST /api/globalproperties
    {
        "name": "GP1",
		"value": "GP Value"
    }

**Method:** `POST`  
**Path:** `/api/globalproperties`

---

### `putApiGlobalproperties`

**Description:** Sample request (this updates the **global property**):
    POST /api/globalproperties/1
    {
        "id": 1,
        "name": "GP1",
		"value": "GP Value"
    }

**Method:** `PUT`  
**Path:** `/api/globalproperties/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## HistoryJob

### `getApiJobhistories`

**Description:** GET /api/jobhistories

**Method:** `GET`  
**Path:** `/api/jobhistories`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `From` | string | No | query parameter: From |
| `To` | string | No | query parameter: To |
| `ScheduleName` | string | No | query parameter: ScheduleName |
| `JobName` | string | No | query parameter: JobName |
| `Duration` | integer | No | query parameter: Duration |
| `JobStatusIds` | string | No | query parameter: JobStatusIds |
| `RunDate` | string | No | query parameter: RunDate |
| `SchedulePath` | string | No | query parameter: SchedulePath |
| `MachineName` | string | No | query parameter: MachineName |
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `IncludeSummary` | boolean | No | query parameter: IncludeSummary |
| `PermissionIds` | string | No | query parameter: PermissionIds |
| `UniqueId` | string | No | query parameter: UniqueId |
| `JobInstanceNumber` | integer | No | query parameter: JobInstanceNumber |
| `UniqueJobIds` | string | No | query parameter: UniqueJobIds |

---

### `getApiJobhistoriesNotes`

**Description:** Sample request (returns a list of **notes** for the job history with the specified job *id*):
    GET /api/jobhistories/2021|03|16|someJob/notes

**Method:** `GET`  
**Path:** `/api/jobhistories/{id}/notes`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `putApiJobhistoriesNotes`

**Description:** Sample request (updates the **history job note** for the job with the specified *id*):
    PUT /api/jobhistories/2021|03|16|jobName/notes

**Method:** `PUT`  
**Path:** `/api/jobhistories/{id}/notes`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## ImpEx

### `deleteApiImpexSchedules`

**Description:** DELETE /api/impex/schedules/{id}

**Method:** `DELETE`  
**Path:** `/api/impex/schedules/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiImpexSchedules`

**Description:** GET /api/impex/schedules

**Method:** `GET`  
**Path:** `/api/impex/schedules`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | array | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `AutoBuild` | boolean | No | query parameter: AutoBuild |
| `MultiInstance` | boolean | No | query parameter: MultiInstance |
| `SubSchedule` | boolean | No | query parameter: SubSchedule |

---

### `getApiImpexSchedules`

**Description:** GET /api/impex/schedules/{id}

**Method:** `GET`  
**Path:** `/api/impex/schedules/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiImpexSchedules`

**Description:** POST /api/impex/schedules

**Method:** `POST`  
**Path:** `/api/impex/schedules`

---

### `putApiImpexSchedules`

**Description:** PUT /api/impex/schedules/{id}

**Method:** `PUT`  
**Path:** `/api/impex/schedules/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## JobActions

### `getApiJobactions`

**Description:** GET /api/jobactions/{id}

**Method:** `GET`  
**Path:** `/api/jobactions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiJobactions`

**Description:** POST /api/jobactions

**Method:** `POST`  
**Path:** `/api/jobactions`

---

## JobInstanceActions

### `deleteApiJobinstanceactions`

**Description:** DELETE /api/jobinstanceactions

**Method:** `DELETE`  
**Path:** `/api/jobinstanceactions`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | No | query parameter: id |

---

### `getApiJobinstanceactions`

**Description:** GET /api/jobinstanceactions/{id}

**Method:** `GET`  
**Path:** `/api/jobinstanceactions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiJobinstanceactions`

**Description:** POST /api/jobinstanceactions

**Method:** `POST`  
**Path:** `/api/jobinstanceactions`

---

### `putApiJobinstanceactions`

**Description:** PUT /api/jobinstanceactions

**Method:** `PUT`  
**Path:** `/api/jobinstanceactions`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | No | query parameter: id |

---

## JobTags

### `deleteApiJobtags`

**Description:** Sample request (this deletes a specified **tag**):
        DELETE /api/jobtags/{tagname}

**Method:** `DELETE`  
**Path:** `/api/jobtags/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Path parameter: name |

---

### `getApiJobtags`

**Description:** Sample request (this returns a list of **tags** by **name** in **descending** order starting with offset 2 and up to limit 2):
    GET ?sortby=name:asc&limit=2&offset=2

**Method:** `GET`  
**Path:** `/api/jobtags`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `RemoteInstance` | string | No | query parameter: RemoteInstance |
| `Name` | string | No | query parameter: Name |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `SortOrders` | array | No | query parameter: SortOrders |
| `MasterOnly` | boolean | No | query parameter: MasterOnly |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiJobtags`

**Description:** Sample request (this returns a list of **tags** with name like **name**):
    GET /api/jobtags/?name=testtag:

**Method:** `GET`  
**Path:** `/api/jobtags/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Path parameter: name |

---

### `postApiJobtags`

**Description:** Sample request (this creates a new **tag**):
    POST /api/jobtags
            
    {
        "Name": "TagName""
        "TagAssociations":
        [
            {
                "ScheduleName": "Schedule Name",
                "JobName":      "Job Name",
                "FrequencyName":"Frequency name"
            }
        ]
    }

**Method:** `POST`  
**Path:** `/api/jobtags`

---

### `putApiJobtags`

**Description:** PUT /api/jobtags

**Method:** `PUT`  
**Path:** `/api/jobtags`

---

## LicenseTaskCount

### `getApiLicenseTaskCount`

**Description:** GET /api/licenseTaskCount

**Method:** `GET`  
**Path:** `/api/licenseTaskCount`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `From` | string | No | query parameter: From |
| `To` | string | No | query parameter: To |
| `JobTypeIds` | string | No | query parameter: JobTypeIds |
| `DepartmentIds` | string | No | query parameter: DepartmentIds |

---

## Logs

### `getApiLogs`

**Description:** GET /api/logs

**Method:** `GET`  
**Path:** `/api/logs`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `FileName` | string | No | query parameter: FileName |
| `Application` | string | No | query parameter: Application |
| `UserId` | integer | No | query parameter: UserId |
| `SessionId` | integer | No | query parameter: SessionId |

---

### `getApiLogs`

**Description:** GET /api/logs/{filePath}

**Method:** `GET`  
**Path:** `/api/logs/{filePath}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filePath` | string | Yes | Path parameter: filePath |
| `From` | integer | No | query parameter: From |
| `To` | integer | No | query parameter: To |
| `Tail` | integer | No | query parameter: Tail |

---

### `postApiLogs`

**Description:** POST /api/logs

**Method:** `POST`  
**Path:** `/api/logs`

---

## MachineActions

### `getApiMachineActions`

**Description:** GET /api/MachineActions/{id}

**Method:** `GET`  
**Path:** `/api/MachineActions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiMachineActions`

**Description:** POST /api/MachineActions

**Method:** `POST`  
**Path:** `/api/MachineActions`

---

## MachineGroups

### `getApiMachinegroups`

**Description:** GET /api/machinegroups

**Method:** `GET`  
**Path:** `/api/machinegroups`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `Name` | string | No | query parameter: Name |
| `Type` | string | No | query parameter: Type |
| `Ids` | string | No | query parameter: Ids |
| `TypeIds` | string | No | query parameter: TypeIds |
| `IncludeMachines` | boolean | No | query parameter: IncludeMachines |
| `HasAdminAccess` | boolean | No | query parameter: HasAdminAccess |
| `AccessibleMachineGroups` | array | No | query parameter: AccessibleMachineGroups |
| `SortBy` | string | No | query parameter: SortBy |
| `SortOrders` | array | No | query parameter: SortOrders |

---

### `getApiMachinegroups`

**Description:** Sample request (this returns the **machine group** with **id = 1**):  
        GET /api/machinegroups/1

**Method:** `GET`  
**Path:** `/api/machinegroups/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiMachinegroups`

**Description:** Sample request (this creates a new **access code**):  
    POST /api/accesscodes  
    {  
        "name": "Operator""  
    }

**Method:** `POST`  
**Path:** `/api/machinegroups`

---

### `putApiMachinegroups`

**Description:** Sample request (this updates the **machine group**):  
    PUT /api/machinegroups/1  
    {  
        "id": 1,  
        "name": "MachineGroupName"
        "type: {
                "id": 6,  
    }

**Method:** `PUT`  
**Path:** `/api/machinegroups/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Machines

### `deleteApiMachinesProperties`

**Description:** DELETE /api/machines/{id}/properties/{name}

**Method:** `DELETE`  
**Path:** `/api/machines/{id}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `name` | string | Yes | Path parameter: name |

---

### `getApiMachines`

**Description:** GET /api/machines

**Method:** `GET`  
**Path:** `/api/machines`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `includeDocumentation` | boolean | No | query parameter: includeDocumentation |
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |
| `Type` | string | No | query parameter: Type |
| `Typeids` | string | No | query parameter: Typeids |
| `GroupName` | string | No | query parameter: GroupName |
| `GroupIds` | string | No | query parameter: GroupIds |
| `States` | string | No | query parameter: States |
| `Version` | string | No | query parameter: Version |
| `FileTransferRole` | string | No | query parameter: FileTransferRole |
| `Sockets` | string | No | query parameter: Sockets |
| `Tls` | boolean | No | query parameter: Tls |
| `SortBy` | string | No | query parameter: SortBy |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `ExcludeNullMachine` | boolean | No | query parameter: ExcludeNullMachine |
| `SortOrders` | array | No | query parameter: SortOrders |
| `ExtendedProperties` | boolean | No | query parameter: ExtendedProperties |
| `ResourceName` | string | No | query parameter: ResourceName |
| `Errors` | array | No | query parameter: Errors |
| `Properties` | array | No | query parameter: Properties |

---

### `getApiMachines`

**Description:** GET /api/machines/{id}

**Method:** `GET`  
**Path:** `/api/machines/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiMachinesCount_by_status`

**Description:** GET /api/machines/count_by_status

**Method:** `GET`  
**Path:** `/api/machines/count_by_status`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `includeDocumentation` | boolean | No | query parameter: includeDocumentation |
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |
| `Type` | string | No | query parameter: Type |
| `Typeids` | string | No | query parameter: Typeids |
| `GroupName` | string | No | query parameter: GroupName |
| `GroupIds` | string | No | query parameter: GroupIds |
| `States` | string | No | query parameter: States |
| `Version` | string | No | query parameter: Version |
| `FileTransferRole` | string | No | query parameter: FileTransferRole |
| `Sockets` | string | No | query parameter: Sockets |
| `Tls` | boolean | No | query parameter: Tls |
| `SortBy` | string | No | query parameter: SortBy |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `ExcludeNullMachine` | boolean | No | query parameter: ExcludeNullMachine |
| `SortOrders` | array | No | query parameter: SortOrders |
| `ExtendedProperties` | boolean | No | query parameter: ExtendedProperties |
| `ResourceName` | string | No | query parameter: ResourceName |
| `Errors` | array | No | query parameter: Errors |
| `Properties` | array | No | query parameter: Properties |

---

### `getApiMachinesProperties`

**Description:** GET /api/machines/{id}/properties

**Method:** `GET`  
**Path:** `/api/machines/{id}/properties`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiMachinesProperties`

**Description:** GET /api/machines/{id}/properties/{name}

**Method:** `GET`  
**Path:** `/api/machines/{id}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `name` | string | Yes | Path parameter: name |

---

### `postApiMachines`

**Description:** POST /api/machines

**Method:** `POST`  
**Path:** `/api/machines`

---

### `postApiMachinesProperties`

**Description:** POST /api/machines/{id}/properties

**Method:** `POST`  
**Path:** `/api/machines/{id}/properties`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `putApiMachines`

**Description:** PUT /api/machines/{id}

**Method:** `PUT`  
**Path:** `/api/machines/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `putApiMachinesProperties`

**Description:** PUT /api/machines/{id}/properties/{name}

**Method:** `PUT`  
**Path:** `/api/machines/{id}/properties/{name}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `name` | string | Yes | Path parameter: name |

---

## Maintenance

### `getApiServicestatus`

**Description:** GET /api/servicestatus

**Method:** `GET`  
**Path:** `/api/servicestatus`

---

## MasterInstances

### `getApiMasterinstances`

**Description:** GET /api/masterinstances

**Method:** `GET`  
**Path:** `/api/masterinstances`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |

---

### `getApiMasterinstances`

**Description:** GET /api/masterinstances/{id}

**Method:** `GET`  
**Path:** `/api/masterinstances/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiMasterinstances`

**Description:** POST /api/masterinstances

**Method:** `POST`  
**Path:** `/api/masterinstances`

---

### `putApiMasterinstances`

**Description:** PUT /api/masterinstances/{id}

**Method:** `PUT`  
**Path:** `/api/masterinstances/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## MasterJobs

### `getApiMasterjobs`

**Description:** GET /api/masterjobs/{rawId}

**Method:** `GET`  
**Path:** `/api/masterjobs/{rawId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rawId` | string | Yes | Path parameter: rawId |

---

### `getApiMasterjobs`

**Description:** GET /api/masterjobs

**Method:** `GET`  
**Path:** `/api/masterjobs`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `ScheduleIds` | string | No | query parameter: ScheduleIds |
| `JobIds` | string | No | query parameter: JobIds |
| `TagList` | array | No | query parameter: TagList |
| `LimitValue` | integer | No | query parameter: LimitValue |
| `OffsetValue` | integer | No | query parameter: OffsetValue |
| `ScheduleName` | string | No | query parameter: ScheduleName |
| `JobName` | string | No | query parameter: JobName |
| `FrequencyName` | string | No | query parameter: FrequencyName |
| `SortOrders` | array | No | query parameter: SortOrders |
| `JobType` | string | No | query parameter: JobType |
| `DepartmentList` | array | No | query parameter: DepartmentList |
| `AccessCodeList` | array | No | query parameter: AccessCodeList |
| `Name` | string | No | query parameter: Name |
| `SortBy` | string | No | query parameter: SortBy |
| `AccessCodes` | string | No | query parameter: AccessCodes |
| `Limit` | string | No | query parameter: Limit |
| `Offset` | string | No | query parameter: Offset |
| `Tags` | string | No | query parameter: Tags |
| `Departments` | string | No | query parameter: Departments |

---

### `getApiMasterjobsCount`

**Description:** GET /api/masterjobs/count

**Method:** `GET`  
**Path:** `/api/masterjobs/count`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `ScheduleIds` | string | No | query parameter: ScheduleIds |
| `JobIds` | string | No | query parameter: JobIds |
| `TagList` | array | No | query parameter: TagList |
| `LimitValue` | integer | No | query parameter: LimitValue |
| `OffsetValue` | integer | No | query parameter: OffsetValue |
| `ScheduleName` | string | No | query parameter: ScheduleName |
| `JobName` | string | No | query parameter: JobName |
| `FrequencyName` | string | No | query parameter: FrequencyName |
| `SortOrders` | array | No | query parameter: SortOrders |
| `JobType` | string | No | query parameter: JobType |
| `DepartmentList` | array | No | query parameter: DepartmentList |
| `AccessCodeList` | array | No | query parameter: AccessCodeList |
| `Name` | string | No | query parameter: Name |
| `SortBy` | string | No | query parameter: SortBy |
| `AccessCodes` | string | No | query parameter: AccessCodes |
| `Limit` | string | No | query parameter: Limit |
| `Offset` | string | No | query parameter: Offset |
| `Tags` | string | No | query parameter: Tags |
| `Departments` | string | No | query parameter: Departments |

---

## MasterSchedules

### `getApiMasterSchedules`

**Description:** GET /api/MasterSchedules

**Method:** `GET`  
**Path:** `/api/MasterSchedules`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Name` | string | No | query parameter: Name |
| `Ids` | string | No | query parameter: Ids |
| `Sortby` | string | No | query parameter: Sortby |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `SortOrders` | array | No | query parameter: SortOrders |
| `SubSchedule` | boolean | No | query parameter: SubSchedule |
| `MultiInstance` | boolean | No | query parameter: MultiInstance |
| `AutoBuild` | boolean | No | query parameter: AutoBuild |

---

### `getApiMasterSchedules`

**Description:** GET /api/MasterSchedules/{id}

**Method:** `GET`  
**Path:** `/api/MasterSchedules/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiMasterSchedulesCount`

**Description:** GET /api/MasterSchedules/count

**Method:** `GET`  
**Path:** `/api/MasterSchedules/count`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Name` | string | No | query parameter: Name |
| `Ids` | string | No | query parameter: Ids |
| `Sortby` | string | No | query parameter: Sortby |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `SortOrders` | array | No | query parameter: SortOrders |
| `SubSchedule` | boolean | No | query parameter: SubSchedule |
| `MultiInstance` | boolean | No | query parameter: MultiInstance |
| `AutoBuild` | boolean | No | query parameter: AutoBuild |

---

## MasterVisionWorkspaces

### `getApiMastervisionworkspaces`

**Description:** GET /api/mastervisionworkspaces

**Method:** `GET`  
**Path:** `/api/mastervisionworkspaces`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |

---

### `getApiMastervisionworkspaces`

**Description:** GET /api/mastervisionworkspaces/{id}

**Method:** `GET`  
**Path:** `/api/mastervisionworkspaces/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiMastervisionworkspaces`

**Description:** POST /api/mastervisionworkspaces

**Method:** `POST`  
**Path:** `/api/mastervisionworkspaces`

---

### `putApiMastervisionworkspaces`

**Description:** PUT /api/mastervisionworkspaces/{id}

**Method:** `PUT`  
**Path:** `/api/mastervisionworkspaces/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## NamedInstances

### `getApiNamedInstances`

**Description:** GET /api/namedInstances

**Method:** `GET`  
**Path:** `/api/namedInstances`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | integer | No | query parameter: Id |
| `Name` | string | No | query parameter: Name |
| `ScheduleId` | integer | No | query parameter: ScheduleId |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `SortOrders` | array | No | query parameter: SortOrders |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiNamedInstances`

**Description:** GET /api/namedInstances/{instanceId}

**Method:** `GET`  
**Path:** `/api/namedInstances/{instanceId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instanceId` | string | Yes | Path parameter: instanceId |

---

## OpConEvents

### `postApiOpconEventsCollection`

**Description:** POST /api/opconEventsCollection

**Method:** `POST`  
**Path:** `/api/opconEventsCollection`

---

## PropertyExpression

### `postApiPropertyexpression`

**Description:** POST /api/propertyexpression

**Method:** `POST`  
**Path:** `/api/propertyexpression`

---

## RefreshScheduleBuildResultsCache

### `getApiRefreshScheduleBuildResultCache`

**Description:** GET /api/refreshScheduleBuildResultCache

**Method:** `GET`  
**Path:** `/api/refreshScheduleBuildResultCache`

---

## RefreshVisionCache

### `getApiRefreshVisionCache`

**Description:** GET /api/refreshVisionCache

**Method:** `GET`  
**Path:** `/api/refreshVisionCache`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `RefreshStatistics` | boolean | No | query parameter: RefreshStatistics |

---

## RemoteInstances

### `deleteApiRemoteinstances`

**Description:** DELETE /api/remoteinstances/{id}

**Method:** `DELETE`  
**Path:** `/api/remoteinstances/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiRemoteinstances`

**Description:** GET /api/remoteinstances

**Method:** `GET`  
**Path:** `/api/remoteinstances`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |

---

### `getApiRemoteinstances`

**Description:** GET /api/remoteinstances/{id}

**Method:** `GET`  
**Path:** `/api/remoteinstances/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiRemoteinstances`

**Description:** POST /api/remoteinstances

**Method:** `POST`  
**Path:** `/api/remoteinstances`

---

### `putApiRemoteinstances`

**Description:** PUT /api/remoteinstances/{id}

**Method:** `PUT`  
**Path:** `/api/remoteinstances/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Resources

### `deleteApiResources`

**Description:** DELETE /api/resources/{id}

**Method:** `DELETE`  
**Path:** `/api/resources/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiResources`

**Description:** GET /api/resources/{id}

**Method:** `GET`  
**Path:** `/api/resources/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiResources`

**Description:** GET /api/resources

**Method:** `GET`  
**Path:** `/api/resources`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `IncludeDependentDailyJobs` | boolean | No | query parameter: IncludeDependentDailyJobs |
| `IncludeUpdatedByDailyJobs` | boolean | No | query parameter: IncludeUpdatedByDailyJobs |
| `IncludeDependentMasterJobs` | boolean | No | query parameter: IncludeDependentMasterJobs |
| `IncludeUpdatedByMasterJobs` | boolean | No | query parameter: IncludeUpdatedByMasterJobs |
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `Name` | string | No | query parameter: Name |
| `Value` | integer | No | query parameter: Value |
| `Ids` | string | No | query parameter: Ids |
| `Description` | string | No | query parameter: Description |
| `SortBy` | string | No | query parameter: SortBy |
| `SortOrders` | array | No | query parameter: SortOrders |

---

### `postApiResources`

**Description:** POST /api/resources

**Method:** `POST`  
**Path:** `/api/resources`

---

### `putApiResources`

**Description:** PUT /api/resources/{id}

**Method:** `PUT`  
**Path:** `/api/resources/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Roles

### `getApiRoles`

**Description:** GET /api/roles

**Method:** `GET`  
**Path:** `/api/roles`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeAccessCodes` | boolean | No | query parameter: IncludeAccessCodes |
| `IncludeDepartmentFunctions` | boolean | No | query parameter: IncludeDepartmentFunctions |
| `IncludeMachines` | boolean | No | query parameter: IncludeMachines |
| `IncludeMachineGroups` | boolean | No | query parameter: IncludeMachineGroups |
| `IncludeSchedules` | boolean | No | query parameter: IncludeSchedules |
| `IncludeServiceRequests` | boolean | No | query parameter: IncludeServiceRequests |
| `IncludeBatchUsers` | boolean | No | query parameter: IncludeBatchUsers |
| `IncludeUsers` | boolean | No | query parameter: IncludeUsers |
| `Name` | string | No | query parameter: Name |
| `Ids` | string | No | query parameter: Ids |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `SortBy` | string | No | query parameter: SortBy |
| `IncludeEmbeddedScripts` | boolean | No | query parameter: IncludeEmbeddedScripts |

---

### `getApiRoles`

**Description:** GET /api/roles/{id}

**Method:** `GET`  
**Path:** `/api/roles/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiRoles`

**Description:** POST /api/roles

**Method:** `POST`  
**Path:** `/api/roles`

---

### `putApiRoles`

**Description:** PUT /api/roles/{id}

**Method:** `PUT`  
**Path:** `/api/roles/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## ScheduleActions

### `getApiScheduleactions`

**Description:** GET /api/scheduleactions/{id}

**Method:** `GET`  
**Path:** `/api/scheduleactions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiScheduleactions`

**Description:** POST /api/scheduleactions

**Method:** `POST`  
**Path:** `/api/scheduleactions`

---

## ScheduleActionsByDate

### `getApiScheduleActionsByDate`

**Description:** GET /api/scheduleActionsByDate/{id}

**Method:** `GET`  
**Path:** `/api/scheduleActionsByDate/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiScheduleActionsByDate`

**Description:** POST /api/scheduleActionsByDate

**Method:** `POST`  
**Path:** `/api/scheduleActionsByDate`

---

## ScheduleBuilds

### `getApiSchedulebuilds`

**Description:** GET /api/schedulebuilds/{id}

**Method:** `GET`  
**Path:** `/api/schedulebuilds/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiSchedulebuilds`

**Description:** POST /api/schedulebuilds

**Method:** `POST`  
**Path:** `/api/schedulebuilds`

---

## ScheduleChecks

### `getApiScheduleChecks`

**Description:** GET /api/scheduleChecks/{id}

**Method:** `GET`  
**Path:** `/api/scheduleChecks/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiScheduleChecksLogs`

**Description:** GET /api/scheduleChecks/logs/{requestId}

**Method:** `GET`  
**Path:** `/api/scheduleChecks/logs/{requestId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `requestId` | string | Yes | Path parameter: requestId |

---

### `postApiScheduleChecks`

**Description:** POST /api/scheduleChecks

**Method:** `POST`  
**Path:** `/api/scheduleChecks`

---

## ScriptRunners

### `getApiScriptRunners`

**Description:** GET /api/scriptRunners

**Method:** `GET`  
**Path:** `/api/scriptRunners`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ScriptTypeId` | integer | No | query parameter: ScriptTypeId |
| `PlatformId` | integer | No | query parameter: PlatformId |
| `Name` | string | No | query parameter: Name |
| `Ids` | string | No | query parameter: Ids |

---

### `getApiScriptRunners`

**Description:** GET /api/scriptRunners/{id}

**Method:** `GET`  
**Path:** `/api/scriptRunners/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Scripts

### `getApiScripts`

**Description:** GET /api/scripts

**Method:** `GET`  
**Path:** `/api/scripts`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ScriptName` | string | No | query parameter: ScriptName |
| `ScriptTypeName` | string | No | query parameter: ScriptTypeName |
| `ScriptIds` | string | No | query parameter: ScriptIds |
| `RunnerOsId` | integer | No | query parameter: RunnerOsId |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeVersions` | boolean | No | query parameter: IncludeVersions |

---

### `getApiScripts`

**Description:** GET /api/scripts/{id}

**Method:** `GET`  
**Path:** `/api/scripts/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiScriptsVersions`

**Description:** GET /api/scripts/{scriptId}/versions/{versionId}

**Method:** `GET`  
**Path:** `/api/scripts/{scriptId}/versions/{versionId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scriptId` | string | Yes | Path parameter: scriptId |
| `versionId` | string | Yes | Path parameter: versionId |

---

### `getApiScriptVersions`

**Description:** GET /api/scriptVersions/{scriptVersionId}

**Method:** `GET`  
**Path:** `/api/scriptVersions/{scriptVersionId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scriptVersionId` | string | Yes | Path parameter: scriptVersionId |

---

## ServerOptions

### `getApiServeroptions`

**Description:** GET /api/serveroptions

**Method:** `GET`  
**Path:** `/api/serveroptions`

---

### `putApiServeroptions`

**Description:** PUT /api/serveroptions

**Method:** `PUT`  
**Path:** `/api/serveroptions`

---

## ServiceRequestCategories

### `deleteApiServicerequestcategories`

**Description:** DELETE /api/servicerequestcategories/{id}

**Method:** `DELETE`  
**Path:** `/api/servicerequestcategories/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiServicerequestcategories`

**Description:** GET /api/servicerequestcategories

**Method:** `GET`  
**Path:** `/api/servicerequestcategories`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeServiceRequests` | boolean | No | query parameter: IncludeServiceRequests |
| `Name` | string | No | query parameter: Name |
| `Color` | string | No | query parameter: Color |
| `ServiceRequestName` | string | No | query parameter: ServiceRequestName |
| `Ids` | string | No | query parameter: Ids |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiServicerequestcategories`

**Description:** GET /api/servicerequestcategories/{id}

**Method:** `GET`  
**Path:** `/api/servicerequestcategories/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiServicerequestcategories`

**Description:** POST /api/servicerequestcategories

**Method:** `POST`  
**Path:** `/api/servicerequestcategories`

---

### `putApiServicerequestcategories`

**Description:** PUT /api/servicerequestcategories/{id}

**Method:** `PUT`  
**Path:** `/api/servicerequestcategories/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## ServiceRequestExecutions

### `deleteApiServicerequestexecutions`

**Description:** DELETE /api/servicerequestexecutions/{id}

**Method:** `DELETE`  
**Path:** `/api/servicerequestexecutions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiSelfServiceRequestExecutions`

**Description:** GET /api/selfServiceRequestExecutions

**Method:** `GET`  
**Path:** `/api/selfServiceRequestExecutions`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeServiceRequests` | boolean | No | query parameter: IncludeServiceRequests |
| `IncludeOpconResponses` | boolean | No | query parameter: IncludeOpconResponses |
| `IncludeUsers` | boolean | No | query parameter: IncludeUsers |
| `ServiceRequestName` | string | No | query parameter: ServiceRequestName |
| `LoginName` | string | No | query parameter: LoginName |
| `Ids` | string | No | query parameter: Ids |
| `ServiceRequestIds` | string | No | query parameter: ServiceRequestIds |
| `ExecutionStatuses` | string | No | query parameter: ExecutionStatuses |
| `LastUpdateLessThan` | string | No | query parameter: LastUpdateLessThan |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `GroupBy` | string | No | query parameter: GroupBy |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiSelfServiceRequestExecutions`

**Description:** GET /api/selfServiceRequestExecutions/{id}

**Method:** `GET`  
**Path:** `/api/selfServiceRequestExecutions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiSelfServiceRequestExecutionsCount_by_{field}`

**Description:** GET /api/selfServiceRequestExecutions/count_by_{field}

**Method:** `GET`  
**Path:** `/api/selfServiceRequestExecutions/count_by_{field}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field` | string | Yes | Path parameter: field |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeServiceRequests` | boolean | No | query parameter: IncludeServiceRequests |
| `IncludeOpconResponses` | boolean | No | query parameter: IncludeOpconResponses |
| `IncludeUsers` | boolean | No | query parameter: IncludeUsers |
| `ServiceRequestName` | string | No | query parameter: ServiceRequestName |
| `LoginName` | string | No | query parameter: LoginName |
| `Ids` | string | No | query parameter: Ids |
| `ServiceRequestIds` | string | No | query parameter: ServiceRequestIds |
| `ExecutionStatuses` | string | No | query parameter: ExecutionStatuses |
| `LastUpdateLessThan` | string | No | query parameter: LastUpdateLessThan |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `GroupBy` | string | No | query parameter: GroupBy |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiServicerequestexecutions`

**Description:** GET /api/servicerequestexecutions

**Method:** `GET`  
**Path:** `/api/servicerequestexecutions`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeServiceRequests` | boolean | No | query parameter: IncludeServiceRequests |
| `IncludeOpconResponses` | boolean | No | query parameter: IncludeOpconResponses |
| `IncludeUsers` | boolean | No | query parameter: IncludeUsers |
| `ServiceRequestName` | string | No | query parameter: ServiceRequestName |
| `LoginName` | string | No | query parameter: LoginName |
| `Ids` | string | No | query parameter: Ids |
| `ServiceRequestIds` | string | No | query parameter: ServiceRequestIds |
| `ExecutionStatuses` | string | No | query parameter: ExecutionStatuses |
| `LastUpdateLessThan` | string | No | query parameter: LastUpdateLessThan |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `GroupBy` | string | No | query parameter: GroupBy |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiServicerequestexecutions`

**Description:** GET /api/servicerequestexecutions/{id}

**Method:** `GET`  
**Path:** `/api/servicerequestexecutions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiServicerequestexecutionsCount_by_{field}`

**Description:** GET /api/servicerequestexecutions/count_by_{field}

**Method:** `GET`  
**Path:** `/api/servicerequestexecutions/count_by_{field}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field` | string | Yes | Path parameter: field |
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeServiceRequests` | boolean | No | query parameter: IncludeServiceRequests |
| `IncludeOpconResponses` | boolean | No | query parameter: IncludeOpconResponses |
| `IncludeUsers` | boolean | No | query parameter: IncludeUsers |
| `ServiceRequestName` | string | No | query parameter: ServiceRequestName |
| `LoginName` | string | No | query parameter: LoginName |
| `Ids` | string | No | query parameter: Ids |
| `ServiceRequestIds` | string | No | query parameter: ServiceRequestIds |
| `ExecutionStatuses` | string | No | query parameter: ExecutionStatuses |
| `LastUpdateLessThan` | string | No | query parameter: LastUpdateLessThan |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `GroupBy` | string | No | query parameter: GroupBy |
| `SortBy` | string | No | query parameter: SortBy |

---

### `postApiSelfServiceRequestExecutions`

**Description:** POST /api/selfServiceRequestExecutions

**Method:** `POST`  
**Path:** `/api/selfServiceRequestExecutions`

---

### `postApiServicerequestexecutions`

**Description:** POST /api/servicerequestexecutions

**Method:** `POST`  
**Path:** `/api/servicerequestexecutions`

---

### `putApiServicerequestexecutions`

**Description:** PUT /api/servicerequestexecutions/{id}

**Method:** `PUT`  
**Path:** `/api/servicerequestexecutions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## ServiceRequests

### `deleteApiSelfServiceRequests`

**Description:** DELETE /api/selfServiceRequests/{id}

**Method:** `DELETE`  
**Path:** `/api/selfServiceRequests/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `deleteApiServicerequests`

**Description:** DELETE /api/servicerequests/{id}

**Method:** `DELETE`  
**Path:** `/api/servicerequests/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiSelfServiceRequests`

**Description:** GET /api/selfServiceRequests/{id}

**Method:** `GET`  
**Path:** `/api/selfServiceRequests/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiSelfServiceRequests`

**Description:** GET /api/selfServiceRequests

**Method:** `GET`  
**Path:** `/api/selfServiceRequests`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeRoles` | boolean | No | query parameter: IncludeRoles |
| `EvaluateRules` | boolean | No | query parameter: EvaluateRules |
| `Name` | string | No | query parameter: Name |
| `CategoryName` | string | No | query parameter: CategoryName |
| `RoleName` | string | No | query parameter: RoleName |
| `Ids` | string | No | query parameter: Ids |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiServicerequests`

**Description:** GET /api/servicerequests

**Method:** `GET`  
**Path:** `/api/servicerequests`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeRoles` | boolean | No | query parameter: IncludeRoles |
| `EvaluateRules` | boolean | No | query parameter: EvaluateRules |
| `Name` | string | No | query parameter: Name |
| `CategoryName` | string | No | query parameter: CategoryName |
| `RoleName` | string | No | query parameter: RoleName |
| `Ids` | string | No | query parameter: Ids |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiServicerequests`

**Description:** GET /api/servicerequests/{id}

**Method:** `GET`  
**Path:** `/api/servicerequests/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiSelfServiceRequests`

**Description:** POST /api/selfServiceRequests

**Method:** `POST`  
**Path:** `/api/selfServiceRequests`

---

### `postApiServicerequests`

**Description:** POST /api/servicerequests

**Method:** `POST`  
**Path:** `/api/servicerequests`

---

### `putApiSelfServiceRequests`

**Description:** PUT /api/selfServiceRequests/{id}

**Method:** `PUT`  
**Path:** `/api/selfServiceRequests/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `putApiServicerequests`

**Description:** PUT /api/servicerequests/{id}

**Method:** `PUT`  
**Path:** `/api/servicerequests/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## SolutionManagerSettings

### `deleteApiSolutionManagerSettings`

**Description:** DELETE /api/solutionManagerSettings/{id}

**Method:** `DELETE`  
**Path:** `/api/solutionManagerSettings/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiSolutionManagerSettings`

**Description:** GET /api/solutionManagerSettings

**Method:** `GET`  
**Path:** `/api/solutionManagerSettings`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |
| `RoleId` | integer | No | query parameter: RoleId |
| `UserId` | integer | No | query parameter: UserId |
| `GlobalOnly` | boolean | No | query parameter: GlobalOnly |
| `Public` | boolean | No | query parameter: Public |
| `UserCanWrite` | boolean | No | query parameter: UserCanWrite |

---

### `getApiSolutionManagerSettings`

**Description:** GET /api/solutionManagerSettings/{id}

**Method:** `GET`  
**Path:** `/api/solutionManagerSettings/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiSolutionManagerSettings`

**Description:** POST /api/solutionManagerSettings

**Method:** `POST`  
**Path:** `/api/solutionManagerSettings`

---

### `putApiSolutionManagerSettings`

**Description:** PUT /api/solutionManagerSettings/{id}

**Method:** `PUT`  
**Path:** `/api/solutionManagerSettings/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Thresholds

### `deleteApiThresholds`

**Description:** DELETE /api/thresholds/{id}

**Method:** `DELETE`  
**Path:** `/api/thresholds/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiThresholds`

**Description:** GET /api/thresholds/{id}

**Method:** `GET`  
**Path:** `/api/thresholds/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiThresholds`

**Description:** GET /api/thresholds

**Method:** `GET`  
**Path:** `/api/thresholds`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `IncludeDependentDailyJobs` | boolean | No | query parameter: IncludeDependentDailyJobs |
| `IncludeUpdatedByDailyJobs` | boolean | No | query parameter: IncludeUpdatedByDailyJobs |
| `IncludeDependentMasterJobs` | boolean | No | query parameter: IncludeDependentMasterJobs |
| `IncludeUpdatedByMasterJobs` | boolean | No | query parameter: IncludeUpdatedByMasterJobs |
| `Offset` | integer | No | query parameter: Offset |
| `Limit` | integer | No | query parameter: Limit |
| `Name` | string | No | query parameter: Name |
| `Value` | integer | No | query parameter: Value |
| `Ids` | string | No | query parameter: Ids |
| `Description` | string | No | query parameter: Description |
| `SortBy` | string | No | query parameter: SortBy |
| `SortOrders` | array | No | query parameter: SortOrders |

---

### `postApiThresholds`

**Description:** POST /api/thresholds

**Method:** `POST`  
**Path:** `/api/thresholds`

---

### `putApiThresholds`

**Description:** PUT /api/thresholds/{id}

**Method:** `PUT`  
**Path:** `/api/thresholds/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Tokens

### `deleteApiTokens`

**Description:** DELETE /api/tokens

**Method:** `DELETE`  
**Path:** `/api/tokens`

---

### `getApiTokens`

**Description:** GET /api/tokens

**Method:** `GET`  
**Path:** `/api/tokens`

---

### `postApiTokens`

**Description:** POST /api/tokens

**Method:** `POST`  
**Path:** `/api/tokens`

---

### `postApiTokensWindowsauth`

**Description:** POST /api/tokens/windowsauth

**Method:** `POST`  
**Path:** `/api/tokens/windowsauth`

---

### `putApiTokens`

**Description:** PUT /api/tokens/{id}

**Method:** `PUT`  
**Path:** `/api/tokens/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## TriggersMetadata

### `getApiMetadataEventTriggers`

**Description:** GET /api/metadata/eventTriggers

**Method:** `GET`  
**Path:** `/api/metadata/eventTriggers`

---

## Users

### `getApiUsers`

**Description:** GET /api/users

**Method:** `GET`  
**Path:** `/api/users`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Limit` | integer | No | query parameter: Limit |
| `Offset` | integer | No | query parameter: Offset |
| `IncludeDetails` | boolean | No | query parameter: IncludeDetails |
| `LoginName` | string | No | query parameter: LoginName |
| `UserName` | string | No | query parameter: UserName |
| `RoleName` | string | No | query parameter: RoleName |
| `SelfServiceUser` | boolean | No | query parameter: SelfServiceUser |
| `Ids` | string | No | query parameter: Ids |
| `SortOrder.SortBy` | string | No | query parameter: SortOrder.SortBy |
| `SortOrder.IdColumns` | array | No | query parameter: SortOrder.IdColumns |
| `SortOrder.ValidSortOrders` | array | No | query parameter: SortOrder.ValidSortOrders |
| `SortOrder.ColumnList` | array | No | query parameter: SortOrder.ColumnList |
| `SortOrder.SortTypeList` | array | No | query parameter: SortOrder.SortTypeList |
| `SortBy` | string | No | query parameter: SortBy |

---

### `getApiUsers`

**Description:** GET /api/users/{id}

**Method:** `GET`  
**Path:** `/api/users/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiUsers`

**Description:** POST /api/users

**Method:** `POST`  
**Path:** `/api/users`

---

### `putApiUsers`

**Description:** PUT /api/users/{id}

**Method:** `PUT`  
**Path:** `/api/users/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## Version

### `getApiVersion`

**Description:** GET /api/version

**Method:** `GET`  
**Path:** `/api/version`

---

## VisionActions

### `deleteApiVisionactions`

**Description:** DELETE /api/visionactions/{id}

**Method:** `DELETE`  
**Path:** `/api/visionactions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiVisionactions`

**Description:** GET /api/visionactions

**Method:** `GET`  
**Path:** `/api/visionactions`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |

---

### `getApiVisionactions`

**Description:** GET /api/visionactions/{id}

**Method:** `GET`  
**Path:** `/api/visionactions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiVisionactions`

**Description:** POST /api/visionactions

**Method:** `POST`  
**Path:** `/api/visionactions`

---

### `putApiVisionactions`

**Description:** PUT /api/visionactions/{id}

**Method:** `PUT`  
**Path:** `/api/visionactions/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## VisionCardAnomalies

### `getApiVisioncardanomalies`

**Description:** GET /api/visioncardanomalies

**Method:** `GET`  
**Path:** `/api/visioncardanomalies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `From` | string | No | query parameter: From |
| `To` | string | No | query parameter: To |
| `CardIds` | string | No | query parameter: CardIds |
| `ExcludeQos` | boolean | No | query parameter: ExcludeQos |
| `ExcludeSla` | boolean | No | query parameter: ExcludeSla |
| `CardTrackIds` | array | No | query parameter: CardTrackIds |

---

## VisionCardStatistics

### `getApiVisioncardstatistics`

**Description:** GET /api/visioncardstatistics

**Method:** `GET`  
**Path:** `/api/visioncardstatistics`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `From` | string | No | query parameter: From |
| `To` | string | No | query parameter: To |
| `CardIds` | string | No | query parameter: CardIds |
| `ExcludeQos` | boolean | No | query parameter: ExcludeQos |
| `ExcludeSla` | boolean | No | query parameter: ExcludeSla |
| `CardTrackIds` | array | No | query parameter: CardTrackIds |

---

## VisionCards

### `deleteApiMastervisionworkspacesVisioncards`

**Description:** DELETE /api/mastervisionworkspaces/{id}/visioncards/{cardId}/{version}

**Method:** `DELETE`  
**Path:** `/api/mastervisionworkspaces/{id}/visioncards/{cardId}/{version}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `cardId` | string | Yes | Path parameter: cardId |
| `version` | string | Yes | Path parameter: version |

---

### `getApiMastervisionworkspacesVisioncards`

**Description:** GET /api/mastervisionworkspaces/{id}/visioncards/{cardId}

**Method:** `GET`  
**Path:** `/api/mastervisionworkspaces/{id}/visioncards/{cardId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `cardId` | string | Yes | Path parameter: cardId |

---

### `postApiMastervisionworkspacesVisioncards`

**Description:** POST /api/mastervisionworkspaces/{id}/visioncards

**Method:** `POST`  
**Path:** `/api/mastervisionworkspaces/{id}/visioncards`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `putApiMastervisionworkspacesVisioncards`

**Description:** PUT /api/mastervisionworkspaces/{id}/visioncards/{cardId}

**Method:** `PUT`  
**Path:** `/api/mastervisionworkspaces/{id}/visioncards/{cardId}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |
| `cardId` | string | Yes | Path parameter: cardId |

---

## VisionFrequencies

### `deleteApiVisionfrequencies`

**Description:** DELETE /api/visionfrequencies/{id}

**Method:** `DELETE`  
**Path:** `/api/visionfrequencies/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `getApiVisionfrequencies`

**Description:** GET /api/visionfrequencies

**Method:** `GET`  
**Path:** `/api/visionfrequencies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `Name` | string | No | query parameter: Name |

---

### `getApiVisionfrequencies`

**Description:** GET /api/visionfrequencies/{id}

**Method:** `GET`  
**Path:** `/api/visionfrequencies/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

### `postApiVisionfrequencies`

**Description:** POST /api/visionfrequencies

**Method:** `POST`  
**Path:** `/api/visionfrequencies`

---

### `putApiVisionfrequencies`

**Description:** PUT /api/visionfrequencies/{id}

**Method:** `PUT`  
**Path:** `/api/visionfrequencies/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---

## VisionJobAnomalies

### `getApiVisionjobanomalies`

**Description:** GET /api/visionjobanomalies

**Method:** `GET`  
**Path:** `/api/visionjobanomalies`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `VisionCardAnomalyId` | integer | No | query parameter: VisionCardAnomalyId |
| `VisionCardAnomalyIds` | string | No | query parameter: VisionCardAnomalyIds |
| `ScheduleDate` | string | No | query parameter: ScheduleDate |
| `TagPattern` | string | No | query parameter: TagPattern |
| `StartedLate` | boolean | No | query parameter: StartedLate |
| `EndedLate` | boolean | No | query parameter: EndedLate |
| `ExpectedStartTime` | string | No | query parameter: ExpectedStartTime |
| `ExpectedEndTime` | string | No | query parameter: ExpectedEndTime |
| `ActualStartTime` | string | No | query parameter: ActualStartTime |
| `ActualEndTime` | string | No | query parameter: ActualEndTime |

---

## VisionStatistic

### `getApiVisionstatistic`

**Description:** GET /api/visionstatistic

**Method:** `GET`  
**Path:** `/api/visionstatistic`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |
| `From` | string | No | query parameter: From |
| `To` | string | No | query parameter: To |
| `CardIds` | string | No | query parameter: CardIds |
| `ExcludeQos` | boolean | No | query parameter: ExcludeQos |
| `ExcludeSla` | boolean | No | query parameter: ExcludeSla |
| `CardTrackIds` | array | No | query parameter: CardTrackIds |

---

## VisionStats

### `getApiVisionstats`

**Description:** GET /api/visionstats

**Method:** `GET`  
**Path:** `/api/visionstats`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Ids` | string | No | query parameter: Ids |

---

### `getApiVisionstats`

**Description:** GET /api/visionstats/{id}

**Method:** `GET`  
**Path:** `/api/visionstats/{id}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Path parameter: id |

---



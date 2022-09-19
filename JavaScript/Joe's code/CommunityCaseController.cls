/*
* Threat Intelligence Passphrase: 9fbef606107a605d69c0edbcd8029e5d
* Class Name: CommunityCaseController
* Description: This class is the controller for the Community Case Creation in lwc
* Jira Ticket : ASR-24042
* Version : v1
* Modified Date : 3/30/2022
*/
public with sharing class CommunityCaseController {

    public static final Id customerServiceRecordTypeId = Schema.SObjectType.Case.getRecordTypeInfosByName().get('Customer Service').getRecordTypeId();

    @AuraEnabled
    public static String createNewCase(Case record){
        try {

            Group queue = [
                SELECT Id FROM Group WHERE Name = 'Customer Service' AND Type = 'Queue' LIMIT 1
            ];
            
            record.RecordTypeId = customerServiceRecordTypeId;
            record.Origin = 'Web';
            record.OwnerId = q.Id;
            record.Type = 'General Inquiry';

            insert record;

            Case newCase = [
                SELECT CaseNumber FROM Case WHERE Id = :record.Id LIMIT 1
            ];

            return newCase.CaseNumber;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

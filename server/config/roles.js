const allRoles={
    user:[
        'createUserProfile',
        'updateProfile',
        'uploadResume',
        'applyForJobs',
        'trackApplicationStatus',
        'receiveNotifications',
        'setInterviewReminders',
        'communicateWithRecruiters',

    ],
    recruiter:[
        'postJobListings',
        'browseProfiles',
        'shortlistCandidates',
        'scheduleInterviews',
        'sendNotifications',
        'communicateWithJobSeekers',
        'viewJobReports',

    ],
    hiringManager:[
    'reviewShortlistedCandidates',
    'makeHiringDecisions',
    'scheduleAndManageInterviews',
    'updateApplicationStatus',
    'collaborateWithRecruiters',
    ],
    admin:[
        'manageUserAccounts',
        'manageJobPostings',
        'accessSystemSettings',
        'generateReports',
        'handleGlobalNotifications',
        'manageAccessControl',
    ]
}

const roles=Object.keys(allRoles);
const roleRights=new Map(Object.entries(allRoles));

module.exports={
    roles,
    roleRights,
  
 };



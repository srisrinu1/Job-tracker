const allRoles={
    user: [
        'createProfile',
        'updateProfile',
        'uploadResume',
        'applyForJobs',
        'trackApplicationStatus',
        'receiveNotifications',
        'setInterviewReminders',
        'communicateWithRecruiters',
      ],
      admin: [
        'getUsers',
        'manageUsers',
        'manageJobPostings',
        'accessSystemSettings',
        'generateReports',
        'handleGlobalNotifications',
        'manageAccessControl',
      ],
}

const roles=Object.keys(allRoles);
const roleRights=new Map(Object.entries(allRoles));

module.exports={
    roles,
    roleRights,
  
 };



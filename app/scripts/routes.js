// UI-Router states
app.states = {
    'index': {
        url: '/',
        redirectAuthenticated: true,
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@index': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content@index': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    },
    'jobs': {
        url: '/jobs',
        title: 'HA | Job list',
        authRequired: true,
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@jobs': {
                templateUrl: 'templates/common/headerNav.html'
            },            
            'content@jobs': {
                templateUrl: 'templates/jobs/jobs.html',
                controller: 'jobsCtrl',
                resolve: {
                    jobsResolver: ['jobsService', function(jobsService){                                                                          
                        return jobsService.load();
                    }]
                }
            }
        }
    },
    'job': {
        url: '/job/:jobID',
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@job': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content@job': {
                templateUrl: 'templates/job/job.html',
                controller: 'jobCtrl',
                resolve: {
                    job: ['jobService', function(jobService){                        
                        return jobService.load();
                    }]
                }
            },
            'sidebar@job': {
                templateUrl: 'templates/sidebar/jobSidebar.html',
                controller: 'sidebarCtrl',
                resolve: {
                    job: ['jobService', function(jobService){                        
                        return jobService.load();
                    }]
                }
            }
        }
    },
    'job.candidates': {
        url: '/candidates',
        authRequired: true,
        views: {
            '': { 
                templateUrl: 'templates/layout/main.html' 
            },
            'header': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content': {
                templateUrl: 'templates/job/candidates/candidates.html',
                controller: 'candidatesCtrl',
                resolve: {
                    candidatesResolve: ['candidatesService', function( candidatesService ){                        
                        return candidatesService.load();                        
                    }]
                }
            }
        }
    },
    'job.candidate': {
        url: '/candidate/:candidateID',
        authRequired: true,
        title: 'Candidates',
        views: {
            '': { 
                templateUrl: 'templates/layout/main.html' 
            },
            'header': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content': {
                templateUrl: 'templates/job/candidate/candidate.html',                                
            }
        }
    },
    'job.questionnaires': {
        url: '/questionnaires',
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content': {
                templateUrl: 'templates/job/questionnaires/questionnaires.html',
                controller: 'questionnairesCtrl',
                resolve: {
                    questions: ['questionnairesService', function( questionnairesService ){                                                
                        return questionnairesService.load();                        
                    }]
                }
            }
        }
    }    
};
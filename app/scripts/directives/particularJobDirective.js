app.directive('topContent', function() {
  return {
    templateUrl: 'templates/topContent/customTopContent.html'
  };
});

app.directive('topQuestionnairesContent', function() {
  return {
    templateUrl: 'templates/topContent/questionnairesTopContent.html'
  };
});

app.directive('interviewDeadline', function() {
  return {
    templateUrl: 'templates/sidebar/recruitDeadline.html'
  };
});

app.directive('interviewersList', function() {
  return {
    templateUrl: 'templates/sidebar/interviewersList.html'
  };
});

app.directive('interviewQuestion', function() {
  return {
    templateUrl: 'templates/sidebar/interviewQuestions.html'
  };
});

app.directive('interviewCandidate', function() {
  return {
    templateUrl: 'templates/sidebar/interviewCandidates.html'
  };
});
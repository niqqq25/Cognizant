import React from 'react';

import PageLayout from './components/PageLayout';
import TaskSubmit from './pages/TaskSubmit';

const App = () => {
  return (
    <PageLayout>
      <TaskSubmit />
    </PageLayout>
  );
};

export default App;

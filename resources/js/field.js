import IndexTextCounted from './components/TextCounted/IndexField';
import DetailTextCounted from './components/TextCounted/DetailField';
import FormTextCounted from './components/TextCounted/FormField';

import IndexTextareaCounted from './components/TextareaCounted/IndexField';
import DetailTextareaCounted from './components/TextareaCounted/DetailField';
import FormTextareaCounted from './components/TextareaCounted/FormField';

Nova.booting((app,store) => {
  app.component('index-text-counted', IndexTextCounted);
  app.component('detail-text-counted', DetailTextCounted);
  app.component('form-text-counted', FormTextCounted);

  app.component('index-textarea-counted', IndexTextareaCounted);
  app.component('detail-textarea-counted', DetailTextareaCounted);
  app.component('form-textarea-counted', FormTextareaCounted);
});

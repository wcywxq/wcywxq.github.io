import type { DefaultTheme } from 'vitepress'
// import { endorsementSidebar } from './endorsement';
import { materialSidebar } from './material';
import { algorithmSidebar } from './algorithm'
import { extensionSidebar } from './extension';
import { interviewSidebar } from './interview';
import { dailySidebar } from './notes'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // ...endorsementSidebar,
  ...materialSidebar,
  ...algorithmSidebar,
  ...extensionSidebar,
  ...interviewSidebar,
  ...dailySidebar
}

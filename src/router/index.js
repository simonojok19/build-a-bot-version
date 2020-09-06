import Vue from 'vue';
import Router from 'vue-router';
import PartInfo from '@/parts/PartInfo.vue';
import BrowsePart from '@/parts/BrowsePart.vue';
import RobotHeads from '@/parts/RobotHeads.vue';
import RobotArms from '@/parts/RobotArms.vue';
import RobotBases from '@/parts/RobotBases.vue';
import RobotTorsos from '@/parts/RobotTorsos.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import HomePage from '../home/HomePage.vue';

Vue.use(Router);
export default new Router({
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/build', name: 'Build', component: RobotBuilder },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowsePart,
      children: [
        {
          name: 'BrowseHeads',
          path: 'heads',
          component: RobotHeads,
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: RobotArms,
        },
        {
          name: 'BrowseBases',
          path: 'bases',
          component: RobotBases,
        },
        {
          name: 'BrowseTorsos',
          path: 'torsos',
          component: RobotTorsos,
        },
      ],
    },
    {
      path: '/parts/:partTySpe/:id', name: 'Part', component: PartInfo, props: true,
    },
  ],
});
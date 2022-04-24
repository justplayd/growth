import FinishPage from './pages/Finish';
import HomePage from './pages/Home';
import GamePage from './pages/Game';
import PageNotFound from './pages/PageNotFound';

export default {
	routes: [
		{
			path: '/',
			component: HomePage,
			linkTo: '/game',
			title: 'home page',
			introTitle: 'Who wants to be a millionaire?'
		},
		{
			path: '/game',
			component: GamePage,
			linkToFinish: '/finish',
			title: 'game page',
			introTitle: 'Who wants to be a millionaire?'
		},
		{
			path: '/finish',
			component: FinishPage,
			linkToStart: '/',
			title: 'game finish',
			introSubTitle: 'Total score:',
			introTotalText: 'earned'
		},
		{
			path: '*',
			component: PageNotFound
		}
	]
};

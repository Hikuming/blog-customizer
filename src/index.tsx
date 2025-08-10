import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [arcticleState, setArticleState] = useState(defaultArticleState);

	const handleState = (newState: typeof defaultArticleState) => {
		setArticleState(newState);
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': arcticleState.fontFamilyOption.value,
					'--font-size': arcticleState.fontSizeOption.value,
					'--font-color': arcticleState.fontColor.value,
					'--container-width': arcticleState.contentWidth.value,
					'--bg-color': arcticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm currentState={arcticleState} onClick={handleState} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

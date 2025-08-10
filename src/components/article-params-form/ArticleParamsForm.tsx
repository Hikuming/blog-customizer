import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

import clsx from 'clsx';
import { RadioGroup } from 'src/ui/radio-group';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select/Select';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';

type ArticleParamsFormProps = {
	currentState: typeof defaultArticleState;
	onClick: (state: typeof defaultArticleState) => void;
};

export const ArticleParamsForm = ({
	currentState,
	onClick,
}: ArticleParamsFormProps) => {
	const [formState, setFormState] = useState(currentState);
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		onClick(formState);
		e.preventDefault();
	};

	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	const handleReset = () => {
		onClick(defaultArticleState);
		setFormState(defaultArticleState);
	};

	const handleFontChange = (option: OptionType) => {
		setFormState((prev) => ({
			...prev,
			fontFamilyOption: option,
		}));
	};

	const handleColorChange = (option: OptionType) => {
		setFormState((prev) => ({
			...prev,
			fontColor: option,
		}));
	};

	const handleBgColorChange = (option: OptionType) => {
		setFormState((prev) => ({
			...prev,
			backgroundColor: option,
		}));
	};

	const handleWidthChange = (option: OptionType) => {
		setFormState((prev) => ({
			...prev,
			contentWidth: option,
		}));
	};

	const handleFontSizeChange = (option: OptionType) => {
		setFormState((prev) => ({
			...prev,
			fontSizeOption: option,
		}));
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleForm} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleFontChange}
					/>
					<RadioGroup
						name={'Размер шрифта'}
						options={fontSizeOptions} // Передаём массив опций
						selected={formState.fontSizeOption} // Передаём выбранный элемент
						onChange={handleFontSizeChange}
						title={'Размер шрифта'}
					/>
					<Select
						title={'Цвет шрифта'}
						selected={formState.fontColor}
						options={fontColors}
						onChange={handleColorChange}
					/>
					<Separator />
					<Select
						title={'Цвет фона'}
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={handleBgColorChange}
					/>
					<Select
						title={'Ширина контента'}
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={handleWidthChange}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

type DuckInput = {
	name: string;
	imgUrl: string;
	quote: string;
};

type SignInInput = {
	email: string;
	password: string;
};

type DuckErrors = Partial<DuckInput>;

type SignInErrors = Partial<SignInInput>;

const isValidUrl = (testUrl: string) => {
	try {
		new URL(testUrl);
		return true;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return false;
	}
};

const validateMyDuckForm = ({ name, imgUrl, quote }: DuckInput): DuckErrors => {
	const newErrors: DuckErrors = {};
	if (!name.trim()) newErrors.name = 'Name is required';
	if (!imgUrl.trim()) {
		newErrors.imgUrl = 'Image is required';
	} else if (!isValidUrl(imgUrl)) {
		newErrors.imgUrl = ' Image must be a valid URL';
	}
	if (!quote.trim()) newErrors.quote = 'Quote is required';

	return newErrors;
};

const validateSignIn = ({ email, password }: SignInInput): SignInErrors => {
	const newErrors: SignInErrors = {};

	if (!email.trim()) {
		newErrors.email = 'Email is required';
	}
	if (!password.trim()) {
		newErrors.password = 'Password is required';
	}

	return newErrors;
};

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export { isValidUrl, validateMyDuckForm, validateSignIn, sleep };

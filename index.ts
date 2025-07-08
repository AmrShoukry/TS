interface APIResponse<T> {
  data: T;
  status: Status;
  isLoading: boolean;
}

enum Status {
  SUCCESS = 200,
  REDIRECTION = 300,
  CLIENT_ERROR = 400,
  SERVER_ERROR = 500,
}

type UserData = {
  name: string;
  age: number;
  title?: string;
};

const fakeResponse: APIResponse<UserData> = {
  data: {
    name: 'Amr Shoukry',
    age: 22,
    title: 'Front End Developer',
  },
  status: Status.SUCCESS,
  isLoading: false,
};

console.log(fakeResponse);

// The way that I have come with for declaring various types is using a normal const rather than enum
const MultipleValues = {
  val1: 'text',
  val2: 1,
  val3: false,
  val4: {
    val41: true,
    val42: 'nested',
  },
};

console.log(MultipleValues.val3); // false


export interface UserDetails {
    UserName: string;
    Password: string;
}

export interface TestCase001 {
    ProductID: string;
    ProductName: string;
    ProductDescription: string;
    ProductPrice: string;
    ProductColor: string;
}

export interface TestCase002 {
    ExpectedText: string;
}

export interface TestData {
    UserDetails: UserDetails;
    TC_001: TestCase001;
    TC_002: TestCase002;
}
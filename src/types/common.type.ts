

type User = {
    id?: number,
    name?: string,
    email?: string,
    img?: string,
    joinDate?:string,
    lastDate?: string
}

type Answer = {

}

type Doc = {
    id: number;
    title: string;
    content: string;
    link: string;
    postDate: string; // ISO 문자열 형식의 날짜입니다. 실제로 Date 타입을 사용할 수도 있습니다.
    lastId: string;
    lastDate: string; // 이것도 ISO 문자열 형식의 날짜입니다.
    user?: User | null; // User 인터페이스가 정의되어 있다고 가정하고, 선택적 혹은 null이 될 수 있음을 표시합니다.
    answerList: Answer[]; // Answer 인터페이스가 정의되어 있다고 가정합니다.
  }
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/Sg3XwuEpybU",
  name: "うちだ",
  email: "1234@example.com",
  phone: "090-1234-5678",
  company: {
    name: "テスト株式会社",
    website: "https://google.com"
  }
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

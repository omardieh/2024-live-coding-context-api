import { useUserContext } from "../context/UserContext";

export default function Homepage() {
  const { username, userAge } = useUserContext();

  return (
    <div>
      Hello {username} your age is : {userAge}
    </div>
  );
}

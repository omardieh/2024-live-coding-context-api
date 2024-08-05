import { useUserContext } from "../context/UserContext";

export default function Dashboard() {
  const { username, setUsername, userAge, setUserAge } = useUserContext();
  return (
    <div>
      <div> update username:</div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <div> update user age:</div>
      <input
        type="number"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />
    </div>
  );
}

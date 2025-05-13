import { useRouter } from "next/navigation";

export default function useMoveBack() {
  const moveback = useRouter();
  return () => moveback.back();
}

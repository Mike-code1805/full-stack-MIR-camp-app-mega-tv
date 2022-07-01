import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRouter = () => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const gotoName = useCallback(() => {
    navigate("/name");
  }, [navigate]);

  const gotoAddress = useCallback(() => {
    navigate("/address");
  }, [navigate]);
  const gotoPlan = useCallback(() => {
    navigate("/plan");
  }, [navigate]);
  const gotoContact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);
  const gotoThanks = useCallback(() => {
    navigate("/thanks");
  }, [navigate]);

  return {
    back,

    gotoName,
    gotoAddress,
    gotoPlan,
    gotoContact,
    gotoThanks
  };
};

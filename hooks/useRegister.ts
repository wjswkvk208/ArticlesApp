import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';
import {register} from '../api/auth';
import {AuthError} from '../api/types';
import {useUserState} from '../contexts/UserContext';
import {RootStackNavigationProp} from '../screens/types';
import authStorage from '../storages/authStorage';
import useInform from './useInform';

const useRegister = () => {
  const inform = useInform();
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();
  const mutation = useMutation(register, {
    onSuccess: data => {
      setUser(data.user);
      navigation.pop();
      authStorage.set(data);
      console.log(data);
    },
    onError: (error: AuthError) => {
      const message =
        error.response?.data?.data?.[0]?.messages[0]?.message ?? '로그인 실패';

      inform({title: '오류', message});

      console.log(error);
      console.log(error.response?.data);
    },
  });
  return mutation;
};

export default useRegister;

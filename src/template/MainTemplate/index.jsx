import BodyChat from '../../organisms/BodyChat';
import Chat from '../../organisms/Chat';
import * as S from './styles';


const MainTemplate = () => (
    <S.MainTemplateContainer>
        <BodyChat />
        <Chat />
    </S.MainTemplateContainer>
);

export default MainTemplate;
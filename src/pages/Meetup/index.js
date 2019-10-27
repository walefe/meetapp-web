import React, { useEffect } from 'react';
import api from '~/services/api';

import { Container, MeetupList, MeetupContainer } from './styles';

export default function Meetup() {
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');
    }
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">Editar</button>
        <button type="button">Novo meetup</button>
      </header>

      <MeetupList>
        <MeetupContainer>
          TESTE <span>13 de maio</span>
        </MeetupContainer>
        <MeetupContainer>
          TESTE <span>13 de maio</span>
        </MeetupContainer>
        <MeetupContainer>
          TESTE <span>13 de maio</span>
        </MeetupContainer>
        <MeetupContainer>
          TESTE <span>13 de maio</span>
        </MeetupContainer>
      </MeetupList>
    </Container>
  );
}

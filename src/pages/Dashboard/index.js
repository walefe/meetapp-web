import React, { useEffect } from 'react';
import api from '~/services/api';

import { Container, MeetupList, Meetup } from './styles';

export default function Dashboard() {
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');
    }
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">Novo meetup</button>
      </header>

      <MeetupList>
        <Meetup>
          TESTE <span>13 de maio</span>
        </Meetup>
        <Meetup>
          TESTE <span>13 de maio</span>
        </Meetup>
        <Meetup>
          TESTE <span>13 de maio</span>
        </Meetup>
        <Meetup>
          TESTE <span>13 de maio</span>
        </Meetup>
      </MeetupList>
    </Container>
  );
}

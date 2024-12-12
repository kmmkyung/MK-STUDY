import { Store } from "../core/core";

interface State {
  name: string
  email: string
  github: string
  repository: string
}

export default new Store<State>({
  name: 'MK / KimMinKyung',
  email: '01aldrn10@gmail.com',
  github: 'https://github.com/kmmkyung',
  repository: 'https://github.com/kmmkyung/movie-app'
})
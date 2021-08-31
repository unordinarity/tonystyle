export type Contribution = {
  id: string,
  attributes: {
    title: ''
  },
  relations: {},
}

export type ContributionId = Contribution['id']

export const contributions: Array<Contribution> = []

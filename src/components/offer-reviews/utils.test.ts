import { sortComments } from './utils';
import { Comment } from '../../types/comment';
import { makeFakeComment } from '../../mock/mock';

describe('sortComments function', () => {
  it('sorts comments in descending order by date', () => {
    const comment1: Comment = {...makeFakeComment(), date: '2022-01-01T12:00:00.000Z'};
    const comment2: Comment = {...makeFakeComment(), date: '2022-01-02T12:00:00.000Z'};
    const comment3: Comment = {...makeFakeComment(), date: '2022-01-03T12:00:00.000Z'};

    const comments = [comment1, comment2, comment3];
    const sortedComments = comments.slice().sort(sortComments);

    expect(sortedComments[0].date).toBe(comment3.date);
    expect(sortedComments[1].date).toBe(comment2.date);
    expect(sortedComments[2].date).toBe(comment1.date);
  });

  it('returns 0 when comments have the same date', () => {
    const comment1: Comment = {...makeFakeComment(), date: '2022-01-01T12:00:00.000Z'};
    const comment2: Comment = {...makeFakeComment(), date: '2022-01-01T12:00:00.000Z'};

    expect(sortComments(comment1, comment2)).toBe(0);
  });
});

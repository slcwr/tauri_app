// react-kanbanをインポートする
// 型定義ファイル（.d.ts）がないため、`@ts-ignore`を指定することで
// TypeScriptのエラーを抑止している

// @ts-ignore
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

// かんばんボードに最初に表示するデータを作成する
const board = {
  columns: [
    {
      id: 0,
      title: 'backlog',
      cards: [
        {
          id: 0,
          title: 'kanban',
          description: 'react-kanbanを使用する'
        },
      ]
    },
    {
      id: 1,
      title: '開発中',
      cards: []
    }
  ]
}

// かんばんボードコンポーネントを表示する
function App() {
  return (
    <>
      <Board
        // ボードの初期データ
        initialBoard={board}
        // カードの追加を許可（トップに「＋」ボタンを表示）
        allowAddCard={{ on: "top" }}
        // カードの削除を許可
        allowRemoveCard
        // カラム（カードのグループ）のドラッグをオフにする
        disableColumnDrag
        // 新しいカードの作成時、idに現在時刻の数値表現をセットする
        onNewCardConfirm={(draftCard: any) => ({
          id: new Date().getTime(),
          ...draftCard
        })}
        // 新しいカードが作成されたら、カード等の内容をコンソールに表示する
        onCardNew={console.log}
        // カードがドラッグされたら、カード等の内容をコンソールに表示する
        onCardDragEnd={console.log}
        // カードが削除されたら、カード等の内容をコンソールに表示する
        onCardRemove={console.log}
      />
    </>
  )
}

export default App;

import streamlit as st
import random

st.set_page_config(page_title="Emotion Check", layout="centered")

# タイトル（小さめ）
st.markdown(
    "<h3 style='text-align:center; font-weight:400;'>今の気持ちチェック</h3>",
    unsafe_allow_html=True
)

# 状態管理（複数選択）
if "states" not in st.session_state:
    st.session_state.states = set()

# 感情リスト
emotions = [
    "不安",
    "寂しい",
    "イライラ",
    "もやもや",
    "疲れた",
    "なんとなく不安"
]

# トグル関数
def toggle(emotion):
    if emotion in st.session_state.states:
        st.session_state.states.remove(emotion)
    else:
        st.session_state.states.add(emotion)

st.subheader("今どんな感じ？（複数OK）")

# ボタン表示（色変更なし）
col1, col2 = st.columns(2)

for i, e in enumerate(emotions):
    if i % 2 == 0:
        with col1:
            if st.button(e, key=e):
                toggle(e)
    else:
        with col2:
            if st.button(e, key=e):
                toggle(e)

st.divider()

# ランダムメッセージ
messages = [
    "これは今の反応。結論ではない。",
    "今の気持ちは一時的なもの。",
    "判断する必要はない時間。",
    "これは状態であって事実の評価ではない。",
    "今は波の中にいるだけ。",
]

# 表示
if st.session_state.states:
    st.subheader("今の状態")

    st.write(" / ".join(st.session_state.states))

    st.info(random.choice(messages))

    if st.button("リセット"):
        st.session_state.states = set()

else:
    st.write("まだ選択なし")

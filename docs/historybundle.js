(()=>{"use strict";const t=document.querySelector("#empty-history"),e=document.querySelector("#filled-history");(new class{get history(){return new Promise((t=>{var e;t(JSON.parse(null!==(e=window.localStorage.getItem("history"))&&void 0!==e?e:"[]"))}))}set history(t){window.localStorage.setItem("history",JSON.stringify(t))}save(t){return this.history.then((e=>{if(e.find((e=>t.id===e.id)))throw new Error("This ID already exists on memory");return e.push(t),this.history=e,t}))}find({id:t,date:e,content:n}){return null==t&&null==e&&null==n?null:this.history.then((r=>r.find((r=>!(r.id!=t&&null!=t||r.date!=e&&null!=e||r.content!=n&&null!=n)))))}first(){return this.history.then((t=>t[t.length-1]))}findAll({id:t,date:e,content:n}){return this.history.then((r=>r.filter((r=>!(r.id!=t&&null!=t||r.date!=e&&null!=e||r.content!=n&&null!=n)))))}delete(t){return this.history.then((e=>{const n=e.filter((e=>e.id!==t)),r=e.find((e=>e.id===t));if(!r)throw new Error("id is not registered");return this.history=n,r}))}deleteMany(t){return this.history.then((e=>{const n=e.filter((e=>!t.includes(e.id))),r=e.filter((e=>t.includes(e.id)));if(r.length!==t.length)throw new Error("Some id is not registered");return this.history=n,r}))}addMany(t){const e=[];for(let e of t)if(t.filter((t=>t.id===e.id)).length>1)throw new Error("Repeated IDs provided");return this.history.then((n=>{if(t.find((t=>{if(n.find((e=>e.id==t.id)))throw new Error("Repeated IDs");e.push(t)})),e.length!=t.length)throw new Error("Cannot add all the provided items");return e.forEach((t=>n.push(t))),this.history=n,e}))}}).history.then((n=>{n.length?(n.forEach((t=>{const n=document.createElement("div");n.className="history-container__calculum";const r=document.createElement("h3");r.className="calculum__operation";const i=document.createElement("h2");i.className="calculum__result",function(t,e,n){let r=!1;n.split("").forEach((n=>{"="==n&&(r=!0),r&&"="!=n?e.textContent+=n:t.textContent+=n}))}(r,i,t.operation),n.appendChild(r),n.appendChild(i),e.appendChild(n)})),e.style.display="flex",t.style.display="none"):(e.style.display="none",t.style.display="flex")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94YXJsaW5ob3MtYWNhZGVteS8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8veGFybGluaG9zLWFjYWRlbXkvLi9zcmMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly94YXJsaW5ob3MtYWNhZGVteS8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UvbG9jYWxzdG9yYWdlLmpzIl0sIm5hbWVzIjpbImVtcHR5SGlzdG9yeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpbGxlZEhpc3RvcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoaXN0b3J5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNhdmUiLCJvcGVyYXRpb24iLCJ0aGlzIiwidGhlbiIsImZpbmQiLCJzYXZlZCIsImlkIiwiRXJyb3IiLCJwdXNoIiwiZGF0ZSIsImNvbnRlbnQiLCJ1bmRlZmluZWQiLCJvYmplY3QiLCJmaXJzdCIsImxlbmd0aCIsImZpbmRBbGwiLCJmaWx0ZXIiLCJkZWxldGUiLCJmaWx0ZXJlZEhpc3RvcnkiLCJkZWxldGVkSXRlbSIsImRlbGV0ZU1hbnkiLCJpZHMiLCJpbmNsdWRlcyIsImRlbGV0ZWRJdGVtcyIsImFkZE1hbnkiLCJhcnJheSIsImFkZGFibGUiLCJpIiwiaXRlbSIsImVsZW1lbnQiLCJmb3JFYWNoIiwiciIsInNhdmVkT3BlcmF0aW9uIiwiY2FsY3VsdW1EaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicmVzdWx0IiwiY2FsY3VsdW0iLCJlcXVhbHNDaGVja2VyIiwic3BsaXQiLCJjaGFyIiwidGV4dENvbnRlbnQiLCJzZXBhcmF0ZU9wZXJhdGlvbkFuZFJlc3VsdCIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBZUMsU0FBU0MsY0FBYyxrQkFDdEND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a0MsVUFBWSxzQkFDdEIsTUFBTUMsRUFBU2pELFNBQVMrQyxjQUFjLE1BQ3RDRSxFQUFPRCxVQUFZLG1CQW5DdkIsU0FBb0NsQyxFQUFXbUMsRUFBUUMsR0FDckQsSUFBSUMsR0FBZ0IsRUFDcEJELEVBQVNFLE1BQU0sSUFBSVQsU0FBU1UsSUFDZCxLQUFSQSxJQUNGRixHQUFnQixHQUdkQSxHQUF5QixLQUFSRSxFQUNuQkosRUFBT0ssYUFBZUQsRUFFdEJ2QyxFQUFVd0MsYUFBZUQsS0EwQjNCRSxDQUNFekMsRUFDQW1DLEVBQ0FKLEVBQWUvQixXQUVqQmdDLEVBQVlVLFlBQVkxQyxHQUN4QmdDLEVBQVlVLFlBQVlQLEdBQ3hCL0MsRUFBY3NELFlBQVlWLE1BeEJ4QjVDLEVBQWN1RCxNQUFNQyxRQUFVLE9BQzlCM0QsRUFBYTBELE1BQU1DLFFBQVUsU0FFN0J4RCxFQUFjdUQsTUFBTUMsUUFBVSxPQUM5QjNELEVBQWEwRCxNQUFNQyxRQUFVLFkiLCJmaWxlIjoiaGlzdG9yeWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVtcHR5SGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbXB0eS1oaXN0b3J5Jyk7XG5jb25zdCBmaWxsZWRIaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGxlZC1oaXN0b3J5Jyk7XG5cbmZ1bmN0aW9uIHNlcGFyYXRlT3BlcmF0aW9uQW5kUmVzdWx0KG9wZXJhdGlvbiwgcmVzdWx0LCBjYWxjdWx1bSkge1xuICBsZXQgZXF1YWxzQ2hlY2tlciA9IGZhbHNlO1xuICBjYWxjdWx1bS5zcGxpdCgnJykuZm9yRWFjaCgoY2hhcikgPT4ge1xuICAgIGlmIChjaGFyID09ICc9Jykge1xuICAgICAgZXF1YWxzQ2hlY2tlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGVxdWFsc0NoZWNrZXIgJiYgY2hhciAhPSAnPScpIHtcbiAgICAgIHJlc3VsdC50ZXh0Q29udGVudCArPSBjaGFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRpb24udGV4dENvbnRlbnQgKz0gY2hhcjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1N0b3JhZ2VJc0ZpbGxlZChzdG9yYWdlKSB7XG4gIHN0b3JhZ2UuaGlzdG9yeS50aGVuKChyKSA9PiB7XG4gICAgaWYgKHIubGVuZ3RoKSB7XG4gICAgICByZW5kZXJPcGVyYXRpb25zT25IaXN0b3J5KHIpO1xuICAgICAgZmlsbGVkSGlzdG9yeS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgZW1wdHlIaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGxlZEhpc3Rvcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGVtcHR5SGlzdG9yeS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck9wZXJhdGlvbnNPbkhpc3RvcnkoaGlzdG9yeSkge1xuICBoaXN0b3J5LmZvckVhY2goKHNhdmVkT3BlcmF0aW9uKSA9PiB7XG4gICAgY29uc3QgY2FsY3VsdW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYWxjdWx1bURpdi5jbGFzc05hbWUgPSAnaGlzdG9yeS1jb250YWluZXJfX2NhbGN1bHVtJztcbiAgICBjb25zdCBvcGVyYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9wZXJhdGlvbi5jbGFzc05hbWUgPSAnY2FsY3VsdW1fX29wZXJhdGlvbic7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByZXN1bHQuY2xhc3NOYW1lID0gJ2NhbGN1bHVtX19yZXN1bHQnO1xuICAgIHNlcGFyYXRlT3BlcmF0aW9uQW5kUmVzdWx0KFxuICAgICAgb3BlcmF0aW9uLFxuICAgICAgcmVzdWx0LFxuICAgICAgc2F2ZWRPcGVyYXRpb24ub3BlcmF0aW9uLFxuICAgICk7XG4gICAgY2FsY3VsdW1EaXYuYXBwZW5kQ2hpbGQob3BlcmF0aW9uKTtcbiAgICBjYWxjdWx1bURpdi5hcHBlbmRDaGlsZChyZXN1bHQpO1xuICAgIGZpbGxlZEhpc3RvcnkuYXBwZW5kQ2hpbGQoY2FsY3VsdW1EaXYpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tTdG9yYWdlSXNGaWxsZWQ7XG4iLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY2hlY2tTdG9yYWdlSXNGaWxsZWQgZnJvbSAnLi9zY3JpcHRzL2NvbnRyb2xsZXJzL2hpc3RvcnkuanMnO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL3NjcmlwdHMvc3RvcmFnZS9sb2NhbHN0b3JhZ2UuanMnO1xuXG5sZXQgc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcbmNoZWNrU3RvcmFnZUlzRmlsbGVkKHN0b3JhZ2UpO1xuIiwiY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgZ2V0IGhpc3RvcnkoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKFxuICAgICAgICBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlzdG9yeScpID8/ICdbXScpLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldCBoaXN0b3J5KGhpc3RvcnkpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpc3RvcnknLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XG4gIH1cbiAgc2F2ZShvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5LnRoZW4oKGhpc3RvcnkpID0+IHtcbiAgICAgIGNvbnN0IGlkRXhpc3RzID0gaGlzdG9yeS5maW5kKFxuICAgICAgICAoc2F2ZWQpID0+IG9wZXJhdGlvbi5pZCA9PT0gc2F2ZWQuaWQsXG4gICAgICApO1xuXG4gICAgICBpZiAoaWRFeGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIElEIGFscmVhZHkgZXhpc3RzIG9uIG1lbW9yeScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKG9wZXJhdGlvbik7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb247XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kKHsgaWQsIGRhdGUsIGNvbnRlbnQgfSkge1xuICAgIGlmIChcbiAgICAgIGlkID09IHVuZGVmaW5lZCAmJlxuICAgICAgZGF0ZSA9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbnRlbnQgPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeS50aGVuKChoaXN0b3J5KSA9PiB7XG4gICAgICAgIHJldHVybiBoaXN0b3J5LmZpbmQoXG4gICAgICAgICAgKG9iamVjdCkgPT5cbiAgICAgICAgICAgIChvYmplY3QuaWQgPT0gaWQgfHwgaWQgPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICAgKG9iamVjdC5kYXRlID09IGRhdGUgfHwgZGF0ZSA9PSB1bmRlZmluZWQpICYmXG4gICAgICAgICAgICAob2JqZWN0LmNvbnRlbnQgPT0gY29udGVudCB8fCBjb250ZW50ID09IHVuZGVmaW5lZCksXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmaXJzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5LnRoZW4oKGhpc3RvcnkpID0+IHtcbiAgICAgIHJldHVybiBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQWxsKHsgaWQsIGRhdGUsIGNvbnRlbnQgfSkge1xuICAgIHJldHVybiB0aGlzLmhpc3RvcnkudGhlbigoaGlzdG9yeSkgPT4ge1xuICAgICAgcmV0dXJuIGhpc3RvcnkuZmlsdGVyKFxuICAgICAgICAob2JqZWN0KSA9PlxuICAgICAgICAgIChvYmplY3QuaWQgPT0gaWQgfHwgaWQgPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgIChvYmplY3QuZGF0ZSA9PSBkYXRlIHx8IGRhdGUgPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgIChvYmplY3QuY29udGVudCA9PSBjb250ZW50IHx8IGNvbnRlbnQgPT0gdW5kZWZpbmVkKSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5LnRoZW4oKGhpc3RvcnkpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkSGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKFxuICAgICAgICAob2JqZWN0KSA9PiBvYmplY3QuaWQgIT09IGlkLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRlbGV0ZWRJdGVtID0gaGlzdG9yeS5maW5kKChvYmplY3QpID0+IG9iamVjdC5pZCA9PT0gaWQpO1xuICAgICAgaWYgKCFkZWxldGVkSXRlbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lkIGlzIG5vdCByZWdpc3RlcmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmhpc3RvcnkgPSBmaWx0ZXJlZEhpc3Rvcnk7XG4gICAgICByZXR1cm4gZGVsZXRlZEl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVNYW55KGlkcykge1xuICAgIHJldHVybiB0aGlzLmhpc3RvcnkudGhlbigoaGlzdG9yeSkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRIaXN0b3J5ID0gaGlzdG9yeS5maWx0ZXIoXG4gICAgICAgIChvYmplY3QpID0+ICFpZHMuaW5jbHVkZXMob2JqZWN0LmlkKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBkZWxldGVkSXRlbXMgPSBoaXN0b3J5LmZpbHRlcigob2JqZWN0KSA9PlxuICAgICAgICBpZHMuaW5jbHVkZXMob2JqZWN0LmlkKSxcbiAgICAgICk7XG4gICAgICBpZiAoZGVsZXRlZEl0ZW1zLmxlbmd0aCAhPT0gaWRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWUgaWQgaXMgbm90IHJlZ2lzdGVyZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlzdG9yeSA9IGZpbHRlcmVkSGlzdG9yeTtcbiAgICAgIHJldHVybiBkZWxldGVkSXRlbXM7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNYW55KGFycmF5KSB7XG4gICAgY29uc3QgYWRkYWJsZSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSBvZiBhcnJheSkge1xuICAgICAgaWYgKGFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaS5pZCkubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcGVhdGVkIElEcyBwcm92aWRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5LnRoZW4oKGhpc3RvcnkpID0+IHtcbiAgICAgIGFycmF5LmZpbmQoKG9iamVjdCkgPT4ge1xuICAgICAgICBsZXQgc2FtZUlEQ2hlY2sgPSBoaXN0b3J5LmZpbmQoXG4gICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT0gb2JqZWN0LmlkLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzYW1lSURDaGVjaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVwZWF0ZWQgSURzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkYWJsZS5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWRkYWJsZS5sZW5ndGggIT0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBhbGwgdGhlIHByb3ZpZGVkIGl0ZW1zJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRhYmxlLmZvckVhY2goKG9iamVjdCkgPT4gaGlzdG9yeS5wdXNoKG9iamVjdCkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgICAgcmV0dXJuIGFkZGFibGU7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==